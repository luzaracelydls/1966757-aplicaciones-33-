import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibreriaTabPage } from './libreria-tab.page';

describe('LibreriaTabPage', () => {
  let component: LibreriaTabPage;
  let fixture: ComponentFixture<LibreriaTabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LibreriaTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
