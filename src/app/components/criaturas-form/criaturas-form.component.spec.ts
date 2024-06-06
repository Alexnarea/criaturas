import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaturasFormComponent } from './criaturas-form.component';

describe('CriaturasFormComponent', () => {
  let component: CriaturasFormComponent;
  let fixture: ComponentFixture<CriaturasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriaturasFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriaturasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
