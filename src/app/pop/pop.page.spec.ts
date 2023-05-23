import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopPage } from './pop.page';

describe('PopPage', () => {
  let component: PopPage;
  let fixture: ComponentFixture<PopPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
