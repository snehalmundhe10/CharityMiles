import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import {FormGroup, FormBuilder} from '@angular/forms';
import { CreateCampaignService } from '../shared/create-campaign.service';

@Component({
  selector: 'app-createcampaign',
  templateUrl: './createcampaign.component.html',
  styleUrls: ['./createcampaign.component.css']
})
export class CreatecampaignComponent implements OnInit {

  formVar: FormGroup;
  objectEvent: any;

  constructor(private fb:FormBuilder, private createCampaign:CreateCampaignService, private router: Router ) { }

  ngOnInit() {
    this.formVar = this.fb.group({

      goal: '',
      campaignTitle: '',
      reason: '',
      raiseMoneyFor: '',
      category: ''

    });
  }

  saveCampaign(){

    console.log(this.formVar.value+'OnSubmit');
    this.createCampaign.addCampaigns(this.formVar.value).subscribe(data =>{
         this.formVar.reset;
         //this.router.navigateByUrl("/userprofile");

    })
  }

  goBack() {
    this.router.navigateByUrl("/userprofile");
    //window.location.reload(); // Clear all variable states
  }



}
