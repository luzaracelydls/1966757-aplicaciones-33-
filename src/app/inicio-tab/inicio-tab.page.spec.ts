import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioTabPage } from './inicio-tab.page';

describe('InicioTabPage', () => {
  let component: InicioTabPage;
  let fixture: ComponentFixture<InicioTabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
