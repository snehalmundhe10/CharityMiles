import { Component, OnInit } from '@angular/core';
import { CreateCampaign } from '../shared/create-campaign.model';
import { CreateCampaignService } from '../shared/create-campaign.service';
import {ActivatedRoute,Router} from "@angular/router";

@Component({
  selector: 'app-editcampaign',
  templateUrl: './editcampaign.component.html',
  styleUrls: ['./editcampaign.component.scss']
})
export class EditcampaignComponent implements OnInit {

  newCampaign = new CreateCampaign;
  params:any;

  constructor(private route: ActivatedRoute,private routerr:Router,private createCampaign: CreateCampaignService) {

    this.newCampaign.goal="hi";
    this.newCampaign.campaignTitle="";
    this.newCampaign.reason="";
    this.newCampaign.raiseMoneyFor="";
    this.newCampaign.category="";

    this.route.params.subscribe( params => {console.log(params.id+"parmmsss-------");
    this.params=params.id});
      this.createCampaign.getOneCampaign(this.params).
      subscribe(res=>{console.log(res)+"inside edit comp res";
      this.newCampaign.goal=res.goal;
      this.newCampaign.campaignTitle=res.campaignTitle;
      this.newCampaign.reason=res.reason;
      this.newCampaign.raiseMoneyFor=res.raiseMoneyFor;
      this.newCampaign.category=res.category;

      
    
    }
    );



   }

  ngOnInit() {
  }


  editCampaign(){

    console.log(this.newCampaign._id+"olldexrec in update methoddddd");
     var newCamp1 = new CreateCampaign();
     newCamp1.goal=this.newCampaign.goal;
     newCamp1.campaignTitle=this.newCampaign.campaignTitle;
     newCamp1.reason=this.newCampaign.reason;
     newCamp1.raiseMoneyFor=this.newCampaign.raiseMoneyFor;
     newCamp1.category=this.newCampaign.category;
     newCamp1._id = this.params;
    
     console.log("ëdit campaign");
     this.createCampaign.updateCampaign(newCamp1)
       .subscribe(
         result =>{ console.log(result);
         this.routerr.navigateByUrl("/dashboard");
         }
       
       );
 }

}
