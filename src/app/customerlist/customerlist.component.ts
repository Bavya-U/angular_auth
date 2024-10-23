import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  customerArr: any[] = [];
  postData: any = {};
  pageIndex: number = 1;
  rowNumber: number = 1000;
  isLoading: boolean = false;  
 
  constructor(
    private authService: AuthService,
    private router: Router,
    private toster: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllCommodity();
  }

  getAllCommodity() {
    this.isLoading = true;  
    this.postData['pagination'] = {
      index: this.pageIndex,
      rowCount: this.rowNumber,
      searchObj: null,
      sortingObj: null,
    };

    this.authService.getCommodity(this.postData).subscribe(
      (res) => {
        this.customerArr = res.data.tableData;
        this.toster.success(res.message);
        this.isLoading = false;  
      },
      (err) => {
        console.error('Error fetching data');
        this.toster.error("Error fetching commodity data.");
        this.isLoading = false;  
      }
    );
  }

  onEdit(id: string) {
    this.router.navigate(['/customer/create', id]);
    this.isLoading = false;
    console.log(id);
  }
}
