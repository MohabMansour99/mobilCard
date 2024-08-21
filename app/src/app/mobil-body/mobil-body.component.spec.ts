import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilBodyComponent } from './mobil-body.component';

describe('MobilBodyComponent', () => {
  let component: MobilBodyComponent;
  let fixture: ComponentFixture<MobilBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobilBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobilBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
