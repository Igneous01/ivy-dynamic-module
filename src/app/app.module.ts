import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManualCompileModule } from './manual-compile/manual-compile.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ManualCompileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
