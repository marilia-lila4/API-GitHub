import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { GithubService } from '../github.service';
import { Starred } from '../starred';

@Component({
  selector: 'app-user-starred',
  templateUrl: './user-starred.component.html',
  styleUrls: ['./user-starred.component.css']
})
export class UserStarredComponent implements OnInit {

  loginUser!: string;
  starreds!: Starred[];
  message!: string;

  constructor(private activatedRoute: ActivatedRoute, private githubService: GithubService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.UserByLoginStarred();
  }

  UserByLoginStarred(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe((urlParams) => {
      this.loginUser = urlParams['login'];
      if (this.loginUser) {
        this.githubService.getByLoginUserStarred(this.loginUser).subscribe((response) => {
          (this.starreds = response)       
          if (this.starreds.length <= 0) {
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
