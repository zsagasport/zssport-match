import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatchModule} from '../src/match.module';
import {MatchService} from '../src/match.service';

import {Demo} from './demo.component';

@NgModule({
  declarations: [Demo],
  imports: [BrowserModule, MatchModule],
  bootstrap: [Demo],
  providers: [MatchService]
})
export class DemoModule {}