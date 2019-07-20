import { Component, OnInit, Input } from '@angular/core';
import { FeatureService } from './feature.service';
import { NewModuleServiceService } from 'src/app/new-module/new-module-service.service';

@Component({
  selector: 'feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  public text : string;
  public text2 : string;

  constructor(private featureService : FeatureService, newService: NewModuleServiceService ) {
    this.text = this.featureService.load();
    this.text2 = newService.load();
  }

  ngOnInit() {
    console.log("NgOnInit called");
  }

}
