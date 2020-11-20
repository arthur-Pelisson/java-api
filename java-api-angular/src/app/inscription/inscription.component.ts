
// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Subscription } from 'rxjs';
// import { ActivatedRoute, Router } from '@angular/router';
// import { UserService } from '../shared/user/user.service';
// import { NgForm } from '@angular/forms';


// @Component({
//   selector: 'app-inscription',
//   templateUrl: './inscription.component.html',
//   styleUrls: ['./inscription.component.css']
// })
// export class InscriptionComponent implements OnInit {

//   user: any = {};

//   sub: Subscription;

//   constructor(private route: ActivatedRoute,
//               private router: Router,
//               private userService: UserService){

//               }
             
//   ngOnInit() {
//     this.sub = this.route.params.subscribe(params => {
//       const id = params['id'];
//       if (id) {
//         this.userService.get(id).subscribe((user: any) => {
//           if (user) {
//             this.user = user;
//             this.user.href = user._links.self.href;
//           } else {
//             console.log(`user with id '${id}' not found, returning to list`);
//             this.gotoList();
//           }
//         });
//       }
//     });
//   }

//   ngOnDestroy() {
//     this.sub.unsubscribe();
//   }

//   gotoList() {
//     this.router.navigate(['/users']);
//   }

//   save(form: NgForm) {
//     this.userService.save(form).subscribe(result => {
//       this.gotoList();
//     }, error => console.error(error));
//   }

//   remove(href) {
//     this.userService.remove(href).subscribe(result => {
//       this.gotoList();
//     }, error => console.error(error));
//   }
// }

                                            