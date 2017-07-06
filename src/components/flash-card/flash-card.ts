import {Component, Input} from '@angular/core';


@Component({
  selector: 'flash-card',
  templateUrl: 'flash-card.html'
})
export class FlashCardComponent {

  public flipped : boolean = false;

  @Input() public frontContent : string;
  @Input() public backContent : string;


  public constructor() {

  }


  public flip() {
    this.flipped = !this.flipped;
  }
}
