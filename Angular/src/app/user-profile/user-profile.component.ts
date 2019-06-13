import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";
import {CreateCampaign} from 'src/app/shared/create-campaign.model';
import { CreateCampaignService } from '../shared/create-campaign.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails;

  constructor(private userService: UserService, private router: Router, private createCampaign: CreateCampaignService) { }
  newcampaignList: CreateCampaign[];
  ngOnInit() {

    this.createCampaign.getCampaign().subscribe(CreateCampaign =>{

      this.newcampaignList = CreateCampaign;
      
    });
    
  }

  onEditCampaign(oldExerc) {


    var navUrl = "/editCampaign/" + oldExerc;
    this.router.navigateByUrl("/editCampaign/" + oldExerc);

    }

    onDeleteCampaign(oldRec) {

      console.log(oldRec + "inside delete")
  
      var index = this.newcampaignList.indexOf(oldRec);
      // this.newexcList.remove(oldRec);
      console.log(oldRec._id);
      console.log(index + "index");
      this.newcampaignList.splice(index, 1);
      this.createCampaign.deleteCampaign(oldRec._id)
        .subscribe(
          result => { console.log(result + "resssssssss") }
  
        );
    }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}
