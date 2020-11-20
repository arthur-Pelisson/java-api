import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input() userData:any = { user_name:'', user_prenom: '', user_email: '', user_tel: ''};

  constructor(public userService:UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.userService.getUser(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.userData = data;
    });
  }

  updateUser() {
    console.log(this.userData);
    this.userService.updateUser(this.route.snapshot.params['id'], this.userData).subscribe((result) => {
      this.router.navigate(['/user-details/'+result.userid]);
    }, (err) => {
      console.log(err);
    });
  }
 
}