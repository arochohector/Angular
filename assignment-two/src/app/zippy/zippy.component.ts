import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input('title') title: string;
  @Input('isClicked') isClicked: boolean;

  constructor() { }

  onClick(){
    this.isClicked = !this.isClicked;
  }
}
