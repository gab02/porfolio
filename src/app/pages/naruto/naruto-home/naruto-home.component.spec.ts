import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarutoHomeComponent } from './naruto-home.component';

describe('NarutoHomeComponent', () => {
  let component: NarutoHomeComponent;
  let fixture: ComponentFixture<NarutoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarutoHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NarutoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
