import { Component } from '@angular/core';
import {IPost} from "../../interfaces/post";
import {ThemesService} from "../../services/themes.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  loading = 'Loading...';
  posts: IPost[] | null = null;

  constructor(themeService: ThemesService) {
    // themeService.loadAllPosts().subscribe( p => {
    //   this.posts = p;
    // })
  }
}
