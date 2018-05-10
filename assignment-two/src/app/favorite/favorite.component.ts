import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
  // inputs:['isFavorite'] -- another way of declaring input properites
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isSelected: boolean;
   // alias keeps the contract with the component stable, if the name of the field is changed, the template needs to be updated
  @Output('change') click = new EventEmitter();
  constructor() { }
  canSave = false;
  ngOnInit() {
  }

  onClick(){
      this.isSelected = !this.isSelected;
      this.click.emit({ newValue: this.isSelected });
  }
}

export interface FavoriteChangedEventArgs{
  newValue: boolean
}
