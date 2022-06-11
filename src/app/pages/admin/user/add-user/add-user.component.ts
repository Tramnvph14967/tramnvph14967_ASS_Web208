import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: IUser = {
    name: "",
    position: "",
    about: "",
    cv: "",
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
  onSubmit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.userService.updateUser(this.user).subscribe(data => {
        setTimeout(() => {
          // redirect về user list
          this.router.navigateByUrl('/user');
        }, 2000)
      })
    }
    this.userService.addUser(this.user).subscribe(data => {
      setTimeout(() => {
        // redirect về user list
        this.router.navigateByUrl('/user');
      }, 2000)
    });
  }

}
