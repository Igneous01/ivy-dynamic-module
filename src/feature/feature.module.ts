import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature/feature.component';
import { FeatureService } from './feature/feature.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FeatureRoutingModule
  ],
  declarations: [FeatureComponent],
  providers: [FeatureService]
})
export class FeatureModule { }
