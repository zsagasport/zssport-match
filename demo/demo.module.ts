import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ZssportMatchModule} from '../src';
import {MatchService} from '../src/match.service';

import {Demo} from './demo.component';

@NgModule({
  declarations: [Demo],
  imports: [BrowserModule, ZssportMatchModule],
  bootstrap: [Demo],
  providers: [MatchService]
})
export class DemoModule {}