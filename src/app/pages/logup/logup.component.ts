import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/User';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.css']
})
export class LogupComponent implements OnInit {

  user: IUser = {
    name: "",
    age: 0,
    email: "",
    password: "",

   
  }
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.userService.getUser(id).subscribe(data => {
        this.user = data
      })
    }
  }
  onSubmitSigin() {
    this.userService.addUser(this.user).subscribe(data => {
   

      
      setTimeout(() => {
        // redirect về signin
        alert("Chúc Mừng Bạn Đã Đăng Ký Tài Khoản Thành Công Mời Bạn Đăng Nhập Để Sử Dụng");
        this.router.navigateByUrl('/signin');
      }, 1000)
    });
  }
}
