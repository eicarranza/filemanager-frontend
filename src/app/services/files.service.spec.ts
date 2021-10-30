import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FilesService } from './files.service';
import { File } from 'src/app/models/file.model';

describe('FilesService', () => {
  let service: FilesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ FilesService ]
    });
    
    service = TestBed.inject(FilesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() =>{
    httpMock.verify();
  });
    
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
    
  it('should retrieve files from the API via GET', ()=> {
    const dummyFiles: File[] = [
      {
        id: 1, 
        name: "test-document-1.doc", 
        url: "/files/media/test-document-1.doc",
        extension: "doc",
        size: 1234556,
        created: "2021-10-31"
    },
    {
      id: 1, 
          name: "test-document-1.jpg", 
          url: "/files/media/test-document-1.jpg",
          extension: "jpg",
          size: 1234556,
          created: "2021-10-31"
    }];

    service.getAll().subscribe(files => {
      expect(files.length).toBe(2);
      expect(files).toEqual(dummyFiles);
    });

    const request = httpMock.expectOne(`${service.baseUrl}`);
    expect(request.request.method).toBe('GET');

    request.flush(dummyFiles);


  });
});