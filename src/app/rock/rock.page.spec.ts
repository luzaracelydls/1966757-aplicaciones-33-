import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RockPage } from './rock.page';

describe('RockPage', () => {
  let component: RockPage;
  let fixture: ComponentFixture<RockPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
