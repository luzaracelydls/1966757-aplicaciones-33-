import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionNombrePage } from './seleccion-nombre.page';

describe('SeleccionNombrePage', () => {
  let component: SeleccionNombrePage;
  let fixture: ComponentFixture<SeleccionNombrePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeleccionNombrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
