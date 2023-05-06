import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroContraPage } from './registro-contra.page';

describe('RegistroContraPage', () => {
  let component: RegistroContraPage;
  let fixture: ComponentFixture<RegistroContraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
