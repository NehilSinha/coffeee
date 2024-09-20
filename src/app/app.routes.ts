import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RewardsComponent } from './rewards/rewards.component';
import { JoinComponent } from './join/join.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { StoreComponent } from './store/store.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: JoinComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'store', component: StoreComponent },
    { path: '**', component: PageNotFoundComponent },
];
