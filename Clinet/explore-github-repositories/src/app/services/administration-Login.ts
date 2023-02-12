import { HttpClient } from "@angular/common/http";
import { Token } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { User, UserDto } from "src/assets/models/user";
import { environment } from "src/environment";


@Injectable()
export class AdministrationLogin {
    constructor(private httpClient: HttpClient) {
    }
    Login(user : User) {
        return this.httpClient.post(`${environment.serverUrl}/api/Auth/login`,{
            username : user.Username,
            password : user.Password,
        },{ responseType: 'text' });
    }
}
