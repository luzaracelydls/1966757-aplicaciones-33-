import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaylistDorPage } from './playlist-dor.page';

describe('PlaylistDorPage', () => {
  let component: PlaylistDorPage;
  let fixture: ComponentFixture<PlaylistDorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlaylistDorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
