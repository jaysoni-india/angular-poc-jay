import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  password = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verify(): void{

    if (this.password === '1234'){
      localStorage.setItem('access', '1');
      this.router.navigate(['/component-interaction']).then( () => {
        location.reload();
      });
    }else{
      alert('Oops wrong Password, Try Again');
    }

  }

}
