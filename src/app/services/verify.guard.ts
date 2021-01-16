import { Injectable } from '@angular/core';
import {CanLoad, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VerifyGuard implements CanLoad {

  constructor(private route: Router) {
  }

  canLoad(): boolean{
    const access = localStorage.getItem('access');

    if (access){
      return true;
    }else{
      this.route.navigate(['/verify']).then();
      return false;
    }
  }
}
