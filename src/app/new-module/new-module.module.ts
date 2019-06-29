import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewModuleServiceService } from './new-module-service.service';

@NgModule({
  declarations: [],
  providers: [NewModuleServiceService],
  imports: [
    CommonModule
  ],
  exports: [NewModuleServiceService]
})
export class NewModuleModule { }
