import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaylistEjPage } from './playlist-ej.page';

describe('PlaylistEjPage', () => {
  let component: PlaylistEjPage;
  let fixture: ComponentFixture<PlaylistEjPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlaylistEjPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
