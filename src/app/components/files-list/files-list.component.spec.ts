import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesService } from 'src/app/services/files.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FilesListComponent } from './files-list.component';

describe('FilesListComponent', () => {
  let component: FilesListComponent;
  let fixture: ComponentFixture<FilesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        HttpClientTestingModule 
      ],
      declarations: [ 
        FilesListComponent 
      ],
      providers: [
         FilesService 
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
