/**
 * Created by misur on 29.12.16..
 */
import {Injectable} from "angular2/core";
import {User} from "../models/user";
import {Http} from "angular2/src/http/http";
import 'rxjs/add/operator/map';
import {Response} from "angular2/src/http/static_response";
import {Observable} from "rxjs";

@Injectable()
export  class UserService{

    users :User []= [];
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

    getUsers():User[] {

        let test= this._http.get("./test/users.json")
            .map( responseData =>
                 responseData.json()
            ).subscribe(
            data => this.fromData(data),
            error => alert(error),
            () => console.log("finished")
        );
        return this.users;
    }
    fromData(data){
        for(var i= 0; i < data.length;i++){
            var user:User = {username: data[i].username,password: data[i].password, email: data[i].email , date: data[i].date, type: data[i].type , picture: data[i].picture};
            this.users.push(user);
        }
    }

    checkExistUser(username:string, password:string): boolean{
        for(var i=0; i< this.users.length;i++){
            if(this.users[i].username == username &&  this.users[i].password == password ){
                return true;
            }
        }
        return false;
    }


}