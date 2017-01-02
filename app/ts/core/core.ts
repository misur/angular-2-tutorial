
/**
 * Created by misur on 2.1.17..
 */
import {Router} from "angular2/src/router/router";
import {Injectable} from "angular2/src/core/di/decorators";

@Injectable()
export class  Core{

    constructor(private _router: Router){

    }

    loginUser(){

    }

    logoutUser(){
        console.log("logout");
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("password");
        this._router.navigate(['LoginComponent']);
    }

    saveToCookie(username:string, password: string){
        // var key = btoa(btoa(username) + '??' + btoa(password));
        //Cookie.set('sessionID',key);
        document.cookie = 'username:' +username;

    }
    saveToSession(username:string, password: string){
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("password", password);
    }
}