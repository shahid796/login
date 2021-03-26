import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{
  

  constructor(private router:Router) { }
  canActivate(snapshot:ActivatedRouteSnapshot,Router:RouterStateSnapshot):boolean{
    if(this.isloggedin()){
      return true
    }
    this.router.navigate(["/register"])
    return false
  }
  isloggedin(){
    let status=false
    if(localStorage.getItem("isLoggedin")=="true"){
      status=true
    }
    else{
      status=false
    }
    return status
  }
}
