import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {

  itemNameList: Array<string> = [];

  // tslint:disable-next-line:no-input-rename
  @Input('itemNameChild')
  itemName = '';

  // tslint:disable-next-line:no-input-rename
  @Input('itemNameSubjectChild')
  itemNameSubject: Subject<void> = new Subject<void>();

  @Output()
  itemCountEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    this.itemNameSubject.subscribe( () => this.addItem() );
  }

  getItemName(itemName: string): void{
    this.itemName = itemName;
    this.itemNameList.push(itemName);
    this.emitItemListLength();
  }

  addItem(): void{
    this.itemNameList.push(this.itemName);
    this.emitItemListLength();
  }

  deleteName(index: number): void{
    this.itemNameList = this.itemNameList.filter( (item) => item !== this.itemNameList[index]);
    this.emitItemListLength();
  }

  emitItemListLength(): void{
    this.itemCountEmitter.emit(this.itemNameList.length);
  }

}
