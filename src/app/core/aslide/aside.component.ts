import { Component } from '@angular/core';
import { ThemesService } from '../../services/themes.service';
import { IPost } from '../../interfaces/post';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  loading = 'Loading...';
  posts: IPost[] | null = null;

  constructor(themeService: ThemesService) {
    // themeService.loadAllPosts().subscribe( p => {
    //   this.posts = p;
    // })
  }
}
