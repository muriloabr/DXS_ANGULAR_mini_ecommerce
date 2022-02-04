import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { CorpoComponent } from './navegacao/corpo/corpo.component';
import { RodapeComponent } from './navegacao/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CorpoComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
