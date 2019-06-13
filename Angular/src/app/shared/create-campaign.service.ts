import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { of } from 'rxjs';
//import { map } from "rxjs/operator/map";
import { environment } from '../../environments/environment';
import { CreateCampaign } from './create-campaign.model';
import { Observable, Subject, pipe } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateCampaignService {

  
  constructor(private http: HttpClient) { }

  addCampaigns(createcampaign){
    console.log("Hello"+environment.apiBaseUrl);
    return this.http.post(environment.apiBaseUrl+'/createcampaign',createcampaign);
  }

  // getAllCampaigns(){
  //   console.log("In get all campaign service");
  //   return this.http.get(environment.apiBaseUrl+'/createcampaign',createcampaign);
  // }

  getCampaign(): Observable<CreateCampaign[]>{
    const token = localStorage.getItem('mean-token')
            ? '?token=' + localStorage.getItem('mean-token')
            : '';
            console.log("token "+token);
    return this.http.get(environment.apiBaseUrl+token).pipe(map((response:Response
    )  => {
     return response["data"] as CreateCampaign[];
    })
    )
  }


  deleteCampaign(campaign):Observable<any>{
  
   
    const token = localStorage.getItem('mean-token')
    ? '?token=' + localStorage.getItem('mean-token')
    : '';
  
    console.log("token "+token);
    let deleteUrl = `${environment.apiBaseUrl}/api`+campaign
    return this.http.delete(deleteUrl+token)
    .pipe(map(response => response));


  }

  getOneCampaign(id):Observable<any>{

    console.log("inside method");
    
        const token = localStorage.getItem('mean-token')
                ? '?token=' + localStorage.getItem('mean-token')
                : '';
                console.log("token "+token);
    
                console.log(`${environment.apiBaseUrl}/api`+"/"+id+token+"url for each get")
        return this.http.get(`${environment.apiBaseUrl}/api`+"/"+id+token)
        .pipe(map((response:Response
        )  => {
           console.log(response["data"]+"-------gettt one exxx resss ---------");
        return response["data"] ;
        })
        )
      }



      updateCampaign(campaign:CreateCampaign):Observable<any>{
        const body = campaign;
        console.log(body+"------bodyyyyy");
        const token = localStorage.getItem('mean-token')
        ? '?token=' + localStorage.getItem('mean-token')
        : '';
      
        console.log("token "+token);
        return this.http.put(`${environment.apiBaseUrl}/api/` + campaign._id + token, body)
        .pipe(map((response: Response) => response));
    
    
      }

  }






