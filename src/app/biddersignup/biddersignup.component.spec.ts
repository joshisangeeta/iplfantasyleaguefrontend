import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddersignupComponent } from './biddersignup.component';

describe('BiddersignupComponent', () => {
  let component: BiddersignupComponent;
  let fixture: ComponentFixture<BiddersignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiddersignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
