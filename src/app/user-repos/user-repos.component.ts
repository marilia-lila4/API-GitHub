import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { GithubService } from '../github.service';
import { Repos } from '../repos';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.css']
})
export class UserReposComponent implements OnInit {

  loginUser!: string;
  repos: Repos[] = [];
  message!: string;

  closeResult!: string;

  constructor(private activatedRoute: ActivatedRoute, private githubService: GithubService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.UserByLoginRepos();
  }

  UserByLoginRepos(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe((urlParams) => {
      this.loginUser = urlParams['login'];
      if (this.loginUser) {
        this.githubService.getByLoginUserRepos(this.loginUser).subscribe((response) => {
          (this.repos = response)
          if (this.repos.length <= 0) {
            this.message = 'Nenhum Registro Encontrado';
          } 
        });
      }
    });
  }

  open(content: any) {
    this.modalService.open(content);
  }
}
