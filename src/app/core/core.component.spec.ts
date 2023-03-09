import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CoreComponent } from './core.component';

import { UtilityCoreModule } from '../../../projects/core/src/lib/core.module';

describe('CoreComponent', () => {
  let component: CoreComponent;
  let fixture: ComponentFixture<CoreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [UtilityCoreModule],
      declarations: [CoreComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
