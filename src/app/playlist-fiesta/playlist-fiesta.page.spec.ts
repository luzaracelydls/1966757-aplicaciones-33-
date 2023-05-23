import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaylistFiestaPage } from './playlist-fiesta.page';

describe('PlaylistFiestaPage', () => {
  let component: PlaylistFiestaPage;
  let fixture: ComponentFixture<PlaylistFiestaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlaylistFiestaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
