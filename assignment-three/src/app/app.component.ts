import { IsLikedEventArgs } from './like/like.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Like Component App';
  tweet = {
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    isLiked: false,
    likesCount: 0
  }

  onLikeClick(eventArgs: IsLikedEventArgs) {
  }
}
