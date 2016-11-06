import {
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {expect} from 'chai';
import {MatchComponent} from './../src/match.component';
import {MatchModule} from '../src';

describe('match component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [MatchModule]});
  });

  it('should say Match', () => {
    const fixture: ComponentFixture<MatchComponent> = TestBed.createComponent(MatchComponent);
    fixture.detectChanges();
  });

});
