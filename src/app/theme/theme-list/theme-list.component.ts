import { Component, OnInit } from '@angular/core';
import { ITheme } from '../theme';
import { ThemesService } from '../services/themes.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit{
  themes: ITheme[] | null = null;
  loading = 'Loading...';

  constructor(public themesService: ThemesService) {
  }

  ngOnInit(): void {
    this.themesService.loadAllThemes().subscribe(theme => {
      this.themes = theme;
    })
  }
}
