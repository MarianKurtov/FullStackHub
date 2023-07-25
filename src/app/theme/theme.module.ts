import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThemeListComponent} from "./theme-list/theme-list.component";

@NgModule({
  declarations: [ThemeListComponent],
  exports: [
    ThemeListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ThemeModule { }
