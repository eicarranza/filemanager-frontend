import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesService } from 'src/app/services/files.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FileSettingsComponent } from './file-settings.component';

describe('FileSettingsComponent', () => {
  let component: FileSettingsComponent;
  let fixture: ComponentFixture<FileSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ FileSettingsComponent ],
      providers: [ FilesService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
