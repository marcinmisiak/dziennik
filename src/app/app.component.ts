import { Component } from '@angular/core';
import { User } from './_models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services/authentication.service';
import { AlertService } from './_services/alert.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.alertService.success('Wylogowano');
    this.router.navigate(['/']);

  }
}
