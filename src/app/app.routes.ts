import { Routes } from '@angular/router';
import { HallofshameComponent } from './hallofshame/hallofshame.component';
import { Error404Component } from './error404/error404.component';

export const routes: Routes = [
    {path: '' ,component: HallofshameComponent},
    {path: '**' ,component: Error404Component}
];
