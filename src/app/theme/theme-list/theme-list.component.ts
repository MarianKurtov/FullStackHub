import { Component } from '@angular/core';
import { ITheme } from '../../interfaces/theme';
import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent {
  themes: ITheme[] | null = null;
  loading = 'Loading...';

  constructor(public themesService: ThemesService) {
    // this.themesService.loadAllThemes().subscribe(t => {
    //   this.themes = t;
    // })
  }
}
