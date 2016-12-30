/**
 * Created by misur on 30.12.16..
 */
import {Component} from "angular2/src/core/metadata";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Router} from "angular2/src/router/router";
import {UserService} from "../services/user.service";

@Component({
    templateUrl: './app/templates/createAccount.html',
    styleUrls:['./app/css/login.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService]
})

export class CreateAccountComponenets{
    error = [];
    days = [];
    month = [];
    year = [];

    constructor( private _user: UserService,public _router:Router){
    }



    ngOnInit(): any {

    }

}
