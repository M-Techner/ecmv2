import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { BuyComponent } from './buy/buy.component';
import { ContactComponent } from './contact/contact.component';
import { OtherComponent } from './other/other.component';
import { SellComponent } from './sell/sell.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'index', component: LandingComponent},
    { path: 'home', component: LandingComponent},
    { path: 'about', component: AboutComponent},
    { path: 'buy', component: BuyComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'other', component: OtherComponent},
    { path: 'sell', component: SellComponent},
    { path: '**', redirectTo: '/home', pathMatch: 'full'}
];
