import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FeatureModule } from './feature.module';
import { enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

platformBrowserDynamic().bootstrapModule(FeatureModule)
                        .catch(err => console.error(err));