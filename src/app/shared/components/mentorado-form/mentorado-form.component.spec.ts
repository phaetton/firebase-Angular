import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoradoFormComponent } from './mentorado-form.component';

describe('MentoradoFormComponent', () => {
  let component: MentoradoFormComponent;
  let fixture: ComponentFixture<MentoradoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentoradoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentoradoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
