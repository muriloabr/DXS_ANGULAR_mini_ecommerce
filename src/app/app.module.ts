import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { CorpoComponent } from './navegacao/corpo/corpo.component';
import { RodapeComponent } from './navegacao/rodape/rodape.component';
import { rootRouterConfig } from './app.routes';
import { DataBindingComponent } from './aplications/data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CorpoComponent,
    RodapeComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    [RouterModule.forRoot(rootRouterConfig, {useHash: false})]
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
