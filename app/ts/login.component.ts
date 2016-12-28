/**
 * Created by misur on 28.12.16..
 */
import {Component}from 'angular2/core';
import { ROUTER_DIRECTIVES} from 'angular2/router';
// import {UserService} from "./user/user.service";

@Component({
    templateUrl: './app/templates/login.html',
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['./app/css/login.css']
})



export class LoginComponent{
    checkBox = 'text';
    data:Object = {};
    error = [];
     rememberMe:boolean = true;

    // constructor(private _router: Router, private _userService: UserService){
    //
    // }


    saveToCookie(username:string, password: string){
        var key = btoa(btoa(username) + '??' + btoa(password));
        //Cookie.set('sessionID',key);
        document.cookie = 'sessionID='+ key;
    }

    formSubmit(){
        // this.error = [];
        // var uname = this.data.username;
        // var pass  = this.data.password;
        //
        //
        //
        // if(uname === undefined || pass === undefined){
        //     this.error.push("Must fill username and password");
        // } else {
        //
        //
        //     if(uname== "milos" && pass == "admin"){
        //         if(this.rememberMe == true ){
        //             //this.saveToLocalStorage(uname,pass);
        //             this.saveToCookie(uname,pass);
        //         }
        //         this._userService.setUser(uname,pass);
        //         this._router.navigate(['AdminArea']);
        //
        //     }else{
        //         this.error.push("Username or password  are wrong!");
        //     }
        // }
    }






}
