import {
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {expect} from 'chai';
import {MatchComponent} from './../src/match.component';
import {ZssportMatchModule} from '../src';

describe('match component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ZssportMatchModule]});
  });

  it('should say hello world', () => {
    const fixture: ComponentFixture<MatchComponent> = TestBed.createComponent(MatchComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.trim()).to.equal('Hello world from the zssport match module!');
  });

});
