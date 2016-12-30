/**
 * Created by misur on 28.12.16..
 */
import {Component}from 'angular2/core';
import { ROUTER_DIRECTIVES} from 'angular2/router';
import {Router} from "angular2/src/router/router";
import {UserService} from "./services/user.service";
import {OnInit} from "angular2/src/core/linker/interfaces";
import {User} from "./models/user";

@Component({
    templateUrl: './app/templates/login.html',
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['./app/css/login.css'],
    providers: [UserService]
})



export class LoginComponent implements OnInit{

    data:Object = {};
    error = [];
    rememberMe:boolean = true;
    users :User []= [];
    constructor(private _router: Router, private _userService: UserService){


    }

    ngOnInit(): any {
        // this._userService.getUsers().subscribe(
        //     data => this.fromData(data),
        //     error => alert(error),
        //     () => console.log("finished")
        // );
            this.users = this._userService.getUsers();
    }



    private clone(object: any){
        // hack
        return JSON.parse(JSON.stringify(object));
    }



    saveToCookie(username:string, password: string){
        var key = btoa(btoa(username) + '??' + btoa(password));
        //Cookie.set('sessionID',key);
        document.cookie = 'sessionID='+ key;
    }

    formSubmit(){
        this.error = [];
        var uname = this.data.username;
        var pass  = this.data.password;



        if(uname === undefined || pass === undefined){
            this.error.push("Must fill username and password");
        } else {


            if(this._userService.checkExistUser(uname,pass)){
                if(this.rememberMe == true ){
                    //this.saveToLocalStorage(uname,pass);
                    this.saveToCookie(uname,pass);
                }
                this._userService.setUser(uname,pass);
                this._router.navigate(['MainComponenet']);
                console.log("logged");

            }else{
                this.error.push("Username or password  are wrong!");
            }
        }
    }






}
