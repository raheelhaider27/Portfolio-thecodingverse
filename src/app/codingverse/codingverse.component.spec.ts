import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingverseComponent } from './codingverse.component';

describe('CodingverseComponent', () => {
  let component: CodingverseComponent;
  let fixture: ComponentFixture<CodingverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingverseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodingverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
