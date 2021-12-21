import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GithubService } from '../github.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  filtroListagem!: FormGroup;
  users: User[] = [];
  user!: User;

  searchTerm!: string;
  filterUser: User[] = [];

  message!: string;

  public githubUserQuery!: string;
  public githubProfile!: any;
  public errorMessage!: string;


  constructor(private githubService: GithubService) {}

  ngOnInit() {
  } 

  searchUser() {
    this.githubService.getProfile(this.githubUserQuery).subscribe((data) => {
      this.githubProfile = data;
    }, (error) => {
      this.errorMessage = error;
    })
  }

}
