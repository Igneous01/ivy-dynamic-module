import { Component, Injector, ɵrenderComponent } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ivy-dynamic-module';
  constructor(private injector: Injector) {}
  loadFeature() {
    import('../app/feature/feature.component')
      .then(({ FeatureComponent }) => {
        ɵrenderComponent(FeatureComponent, { host: 'my-container', injector: this.injector });
      });
  }
}
