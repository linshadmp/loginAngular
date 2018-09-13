import { HomePageComponent } from './home-page/home-page.component';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule, Router } from '@angular/router';
const appRoutes: Routes = [
    {path: '' , component: LoginComponent},
    {path: 'homePage' , component: HomePageComponent }
];

export const routing = RouterModule.forRoot(appRoutes);