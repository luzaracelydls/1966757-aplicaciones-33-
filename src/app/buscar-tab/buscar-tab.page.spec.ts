import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarTabPage } from './buscar-tab.page';

describe('BuscarTabPage', () => {
  let component: BuscarTabPage;
  let fixture: ComponentFixture<BuscarTabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BuscarTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
