import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaylistEstPage } from './playlist-est.page';

describe('PlaylistEstPage', () => {
  let component: PlaylistEstPage;
  let fixture: ComponentFixture<PlaylistEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlaylistEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
