import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  @Input() userData = { name:'', prenom: '', email: '', numerodetel: ''};

  constructor(public userService:UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addUser() {
    console.log(this.userData);
    this.userService.addUser(this.userData).subscribe((result) => {

      this.router.navigate(['/user-details/'+result.userid]);
     
    }, (err) => {
      console.log(err);
    });
  }

}  