import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioContraPage } from './inicio-contra.page';

describe('InicioContraPage', () => {
  let component: InicioContraPage;
  let fixture: ComponentFixture<InicioContraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
