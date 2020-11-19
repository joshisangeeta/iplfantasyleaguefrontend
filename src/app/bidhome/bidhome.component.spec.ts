import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidhomeComponent } from './bidhome.component';

describe('BidhomeComponent', () => {
  let component: BidhomeComponent;
  let fixture: ComponentFixture<BidhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
