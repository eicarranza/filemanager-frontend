import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilesService } from 'src/app/services/files.service';
import { FileUploadComponent } from './file-upload.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FileUploadComponent', () => {
  let component: FileUploadComponent;
  let fixture: ComponentFixture<FileUploadComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ FileUploadComponent ],
      providers: [ FilesService ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
