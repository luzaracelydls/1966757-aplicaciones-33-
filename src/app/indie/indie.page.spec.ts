import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndiePage } from './indie.page';

describe('IndiePage', () => {
  let component: IndiePage;
  let fixture: ComponentFixture<IndiePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IndiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
