import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppProductThumbnailComponent } from './atoms/app-product-thumbnail/app-product-thumbnail.component';
import { AppProductListComponent } from './moleculs/app-product-list/app-product-list.component';
import { AppProductPageComponent } from './organisms/app-product-page/app-product-page.component';
import { AppTemplateComponent } from './template/app-template/app-template.component';
import { AppPageComponent } from './page/app-page/app-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AppProductThumbnailComponent,
    AppProductListComponent,
    AppProductPageComponent,
    AppTemplateComponent,
    AppPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
