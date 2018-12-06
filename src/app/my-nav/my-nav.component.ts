import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppComponent } from '../app.component';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { DziennikService } from '../_services/dziennik.service';
import { Osoba } from '../_models/osoba';



@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css'],
})
export class MyNavComponent {
  user: User;
  @Input() osoba: Osoba;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private app: AppComponent,
    private authenticationService: AuthenticationService,
    private router: Router,
    private dziennik: DziennikService

    // private currentUser: User
  ) {
    if (this.authenticationService.currentUserValue) {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      this.getOsoba();


    } else {
      this.user = null;
    }

  }

  logout() {
    this.app.logout();
    this.router.navigate(['/']);
    window.location.reload();
  }

  getOsoba(): void {
    this.dziennik.getOsoba().subscribe(
      osoba => this.osoba = osoba
    );
  }

}
