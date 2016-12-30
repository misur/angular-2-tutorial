import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {MainComponent} from "./main.component";
import {NavbarComponent} from "./navbar.component";
import {LoginComponent} from "./login.component";
import {OnInit} from "angular2/core";
import {Router} from "angular2/router";
import {CreateAccountComponenets} from "./components/createAccount.component";

@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    directives:[ROUTER_DIRECTIVES]
})

@RouteConfig([
    {
        path: '/',
        component: MainComponent,
        name: 'MainComponenet'},
    {
        path: '/login',
        component: LoginComponent,
        name: 'LoginComponent'},
    {
        path: '/createAccount',
        component: CreateAccountComponenets,
        name: 'CreateAccountComponenets'
    }
])

export class AppComponent implements OnInit{

    constructor(private _router: Router){

    }

    ngOnInit(): any {
        var username= localStorage.getItem("username");
        var password= localStorage.getItem("password");
        console.log(username+" - "+ password);
       if(username == null && password == null){
           this._router.navigate(['LoginComponent']);
       }
    }


}
