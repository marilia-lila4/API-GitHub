import { TestBed } from '@angular/core/testing';

import { GithubService } from './github.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('GithubService', () => {
  let service: GithubService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(GithubService);
    httpController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should not immediately connect to the server', () => {
    httpController.expectNone({});
  });

  it('should return a user', () => {

  service.getProfile('marilia-lila4').subscribe(response => {
    expect(response.login);
  });

  const url = 'https://api.github.com/users/marilia-lila4';
  const urlParam = { client_id: '419c430ef63a3c840d63', client_secret: '1bcddcca4b73142832fbe93fd643e8c0b2dbbc05'};
  const urlWithParams = `${url}?client_id=${urlParam.client_id}&client_secret=${urlParam.client_secret}`;

  const req = httpController.expectOne(urlWithParams);
  expect(req.request.method).toEqual('GET');

  req.flush({});

  });
});
