import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class SharedModule { }
