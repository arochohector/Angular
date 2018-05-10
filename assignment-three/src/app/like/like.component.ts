import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() isLiked: boolean;
  @Input()  likesCount: number;
  @Output() click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.likesCount += (this.isLiked) ? -1 : 1;
    this.isLiked = !this.isLiked;
    // if(this.isLiked)
    //   this.addLike();
    // else
    //   this.removeLike();

    this.click.emit({ liked: this.isLiked, likeCount: this.likesCount } );
  }

  // addLike(){
  //   this.likesCount++;
  // }

  // removeLike(){
  //   this.likesCount--;
  // }
}

export interface IsLikedEventArgs{
  liked: boolean,
  likeCount: number
}
