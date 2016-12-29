/**
 * Created by misur on 29.12.16..
 */
import {Injectable} from "angular2/core";
import {User} from "../models/user";
import {Http} from "angular2/src/http/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Response} from "angular2/src/http/static_response";

@Injectable()
export  class UserService{

    constructor(private _http: Http){

    }

    setUser(username:string, password:string){
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    }

    getUser(){
        var username = localStorage.getItem("username");
        var password = localStorage.getItem("password");

        var  user:User =  {username: username,password: password, email: "" , date: "", type: "" , picture:""};

    }

    getUsers(){
        // return this._http.get("./test/users.json").map(this.extractData);
        return this._http.get("./test/users.json").map(res => res.json());
        // return this._http.get('http://date.jsontest.com/').map(res => res.json());
    }

    private extractData(res: Response){
        var body = res.json;

        return body || {};
    }

}