import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username = '';
  email = '';

  constructor(private userService: UserService ) { }

  ngOnInit() {

    console.log("In the profile component");
    
  }

}
