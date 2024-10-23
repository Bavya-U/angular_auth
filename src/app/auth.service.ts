import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
  
export class AuthService {
  private baseUrl = environment.Api_url + 'api/'; 
private baseUrlLogin = environment.Api_url + 'app/'; 
  
  private apiUrl = this.baseUrlLogin + 'auth/login';
  private verfyOTP = this.baseUrlLogin + 'auth/access-code/validate';

  private getid = this.baseUrl + 'commodity/get';
  private postData = this.baseUrl + 'commodity/create';
  private update = this.baseUrl + 'commodity/update';
  private getapiUrl = this.baseUrl + 'commodity/search';
  constructor(private http: HttpClient) { }
  
  login(userName: string, password: string) {
    const body = {
      userName: userName,
      password: password
    };
    return this.http.post<any>(this.apiUrl, body); 
  }

  getUserDetails() {
    return this.http.get(this.getapiUrl);
  }
  
validateOtp(accessCode: string, opaque: string) {


  const payload = {
    accessCode: accessCode,
    opaque: opaque,
  };
  
  return this.http.post(this.verfyOTP, payload);
}

getCommodity(data: any){
  return this.http.put<any>(this.getapiUrl, data);
}
createCommodity(data: any) {
  return this.http.post<any>(this.postData, data);
}

  getSingleCommodity(commodityId: string) {
    return this.http.get<any>(this.getid + '/' + commodityId);
  }

  updateCommodity(data: any){
    return this.http.put<any>(this.update, data);
  }

  
}



