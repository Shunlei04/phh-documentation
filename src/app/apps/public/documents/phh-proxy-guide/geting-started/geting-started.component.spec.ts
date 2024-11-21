import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetingStartedComponent } from './geting-started.component';

describe('GetingStartedComponent', () => {
  let component: GetingStartedComponent;
  let fixture: ComponentFixture<GetingStartedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetingStartedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetingStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
