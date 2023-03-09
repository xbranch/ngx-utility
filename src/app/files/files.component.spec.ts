import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FilesComponent } from './files.component';

import { UtilityFilesModule } from '../../../projects/files/src/lib/files.module';

describe('FilesComponent', () => {
  let component: FilesComponent;
  let fixture: ComponentFixture<FilesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [UtilityFilesModule],
      declarations: [FilesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
