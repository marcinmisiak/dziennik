import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { Osoba } from '../_models/osoba';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DziennikService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  public user: User;
  public osoba: Observable<Osoba>;


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.user =  JSON.parse(localStorage.getItem('currentUser'));
  }

  getOsoba(): Observable<Osoba> {
    return this.http.get<Osoba>(`${environment.urlApi}osoba&access-token=${this.user.access_token}&id=${this.user.id}`).pipe(
    //  map(osoba => osoba)
    );
  }
}
