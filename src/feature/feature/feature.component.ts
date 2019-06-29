import { Component, OnInit, Input } from '@angular/core';
import { FeatureService } from './feature.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  public text : string;

  constructor(private featureService : FeatureService) {
    this.text = this.featureService.load();
  }

  ngOnInit() {
    console.log("NgOnInit called");
  }

}
