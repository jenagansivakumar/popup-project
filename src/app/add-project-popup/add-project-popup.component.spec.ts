import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectPopupComponent } from './add-project-popup.component';

describe('AddProjectPopupComponent', () => {
  let component: AddProjectPopupComponent;
  let fixture: ComponentFixture<AddProjectPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProjectPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProjectPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
