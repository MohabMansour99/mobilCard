import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilCardComponent } from './mobil-card.component';

describe('MobilCardComponent', () => {
  let component: MobilCardComponent;
  let fixture: ComponentFixture<MobilCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobilCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobilCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
