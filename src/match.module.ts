import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatchComponent} from './match.component';
import {MatchService} from './match.service';

@NgModule({
  declarations: [
    MatchComponent
  ],
  imports: [CommonModule],
  exports: [MatchComponent],
  providers: [MatchService]
})
export class MatchModule {}