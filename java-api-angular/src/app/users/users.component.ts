import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any = [];

  constructor(public userService:UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.users = [];
    this.userService.getUsers().subscribe((data: {}) => {
      console.log(data);
      this.users = data;
    });
  }

  add() {
    this.router.navigate(['/user-add']);
  }

  delete(id) {
    this.userService.deleteUser(id)
      .subscribe(res => {
          this.getUsers();
        }, (err) => {
          console.log(err);
        }
      );
  }

}