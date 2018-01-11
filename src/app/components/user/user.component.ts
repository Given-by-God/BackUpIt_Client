import {Component, OnInit} from '@angular/core';
import {DataService} from '../../service/data.service';


@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  constructor(private dataService: DataService) {
  }


  user:User = {
    login:"",
    password:""
  };

  listOfUsers:User[];


  ngOnInit() {

    this.dataService.getUsers().subscribe(
       (post) =>
      {
        this.listOfUsers = post;
        console.log(post);
      });
  }

  addNewUser(login,password){
    this.user.login = login;
    this.user.password = password;
    this.listOfUsers.push(this.user);
    this.dataService.Post(this.user).subscribe();
  }
}

interface User {
  login: string;
  password: string;
}
