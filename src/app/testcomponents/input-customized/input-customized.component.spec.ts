import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCustomizedComponent } from './input-customized.component';

describe('InputCustomizedComponent', () => {
  let component: InputCustomizedComponent;
  let fixture: ComponentFixture<InputCustomizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCustomizedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputCustomizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
