import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit {

  showDeleteIcon = false;

  constructor() { }

  ngOnInit(): void {
    this.showDeleteIcon = !! localStorage.getItem('access');
  }

  settings(): void{
    alert('Settings Disabled Currently');
  }

  clearLocalStorage(): void{
    localStorage.clear();
    location.reload();
  }

}
