import {Component, OnInit, Input} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements OnInit {

  itemName: string;

  itemNameSubject: Subject<void> = new Subject<void>();

  @Input()
  itemCount: number;

  constructor() {
    this.itemName = '';
    this.itemCount = 0;
  }

  ngOnInit(): void {
  }

  addItem(): void{
    this.itemNameSubject.next();
  }

  getItemCount(itemCount: number): void{
    this.itemName = '';
    this.itemCount = itemCount;
  }

}
