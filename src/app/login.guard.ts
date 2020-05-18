import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiServiceService } from './services/api-service.service';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router,private apiservice:ApiServiceService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree  {
    var user=JSON.parse(localStorage.getItem('currentUser') );
    console.log("userrrrrrrrrrrr",user['username'])
    if((user['username']) == "student"){

    this.router.navigate(['student']);
      return false;
     }
    return true;
  }
}
