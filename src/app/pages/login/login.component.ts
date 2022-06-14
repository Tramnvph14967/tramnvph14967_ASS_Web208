import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../../models/User';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: { email: string, password: string } = {
    email: "",
    password: ""
  }

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.userService.login(this.user).subscribe(user => {
      localStorage.setItem('user', JSON.stringify(user));

      
      setTimeout(() => {
        // redirect về signin
        alert("Bạn đã đăng nhập thành công mời sử dụng trang web");
        this.router.navigateByUrl('/site/home');
      }, 500)
    });
  }
}
