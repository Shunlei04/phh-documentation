import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhhProxyGuideComponent } from './phh-proxy-guide.component';

describe('PhhProxyGuideComponent', () => {
  let component: PhhProxyGuideComponent;
  let fixture: ComponentFixture<PhhProxyGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhhProxyGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhhProxyGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
