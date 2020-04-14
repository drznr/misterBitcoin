import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {
  faBitcoin = faBitcoin;
  cred: any = {
    name: ''
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  doSignUp(ev: Event) {
    ev.preventDefault();
    this.userService.signup(this.cred.name);
    this.router.navigate(['/']);
  }

}
