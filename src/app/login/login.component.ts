import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = '';
  password: string = '';
  otp: string = '';
  showOtpModal: boolean = false;
  isLoading: boolean = false;  

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
   
  ) { }

  ngOnInit(): void { }

  login() {
    
    this.authService.login(this.userName, this.password).subscribe(
      (response: any) => {
        localStorage.setItem('authToken', response.data.jwt);
        const jwttoken = response.data.jwt
        console.log(jwttoken,"token")
    
        localStorage.setItem('accessCode', response.data.accessCode.toString());
        localStorage.setItem('opaque', response.data.opaque);

        const accesscode = response.data.accessCode.toString();
        const opaque = response.data.opaque
    
        this.authService.validateOtp(accesscode,opaque).subscribe(
          (otpResponse: any) => {
            const opaque = otpResponse.data.opaque
            console.log(opaque)

            this.toastr.success('Login and OTP validation successful!', 'Success');
            this.showOtpModal = false;
            this.isLoading = false;
            this.router.navigate(['/customer/table']);
          },
          (otpError) => {

            console.error('OTP validation failed', otpError);
            this.toastr.error('OTP validation failed. Please try again.', 'Error');
          }
        );
      },
      (error) => {

        console.error('Login failed', error);
        this.toastr.error('Login failed. Please try again.', 'Error');
      }
    );
  }
  

}
