import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature/feature.component';
import { FeatureService } from './feature/feature.service';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule
  ],
  declarations: [FeatureComponent, FeatureService]
})
export class FeatureModule { }
