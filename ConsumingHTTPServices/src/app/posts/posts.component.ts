import { BadInput } from './../common/validators/bad-input-error';
import { NotFoundError } from './../common/validators/not-found-error';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/validators/app-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    // add to the list on screen
    this.posts.splice(0, 0, post);
    // clear input text box
    input.value = '';

    this.service.create(post)
        .subscribe(response => {
            post['id'] = response.id;
            console.log(response);
          },
          (err: AppError) => {
            // remove the added when error
            this.posts.splice(0, 1);

            if (err instanceof BadInput) {
              // this.form.setErrors(error.originalError);
            } else {
              throw err;
            }
          });
  }

  updatePost(post) {
    // this.http.patch(this.url, JSON.stringify({ }));
      this.service.update(post)
        .subscribe(
          updatedPost => {
            console.log(updatedPost);
          });
  }

  deletePost(post) {
    // find the index of the post that will be deleted
    const index = this.posts.indexOf(post);
    // remove the item from the list at its index.
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(
        null,
        (err: AppError) => {
          // If an error, put the post back into the array in the correct index
          this.posts.splice(index, 0, post);
          // Validate if the post hasn't been deleted previously.
          if (err instanceof NotFoundError) {
            alert('This post has already been deleted.');
          } else {
            throw err;
          }
        });
  }
}
