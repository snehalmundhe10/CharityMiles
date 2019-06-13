import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import {EditcampaignComponent} from './editcampaign/editcampaign.component';
import { CreatecampaignComponent } from './createcampaign/createcampaign.component';
// import { CreateCampaignComponent} from './create-campaign/create-campaign.component';

const routes: Routes = [
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
},
{
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
},
{
    path: 'user-profile', component: UserProfileComponent,canActivate:[AuthGuard]
},
{
    path: '', redirectTo: '/login', pathMatch: 'full'
},
{
    path: 'createcampaign', component: CreatecampaignComponent
},
{
    path: 'editcampaign', component: EditcampaignComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
