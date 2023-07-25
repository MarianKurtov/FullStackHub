import { Component } from '@angular/core';
import { IPost } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  loading = 'Loading...';
  posts: IPost[] | null = null;

  constructor(postService: PostService) {
    // postService.loadAllPosts().subscribe( p => {
    //   this.posts = p;
    // })
  }
}
