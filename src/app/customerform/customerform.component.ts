import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css']
})
export class CustomerformComponent implements OnInit {
  commodityForm!: FormGroup;  

  commodity: any = {};  
  commodityId: string | null = null;
  isLoading: boolean = false;

  
  constructor(
    private fb: FormBuilder,
    private commodityService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initializeForm();  

    this.commodityId = this.route.snapshot.paramMap.get('id');
    if (this.commodityId) {
      this.loadCommodityData(this.commodityId); 
    }
  }

  initializeForm(): void {
    this.commodityForm = this.fb.group({
      id: [null],
      name: [null, Validators.required],
      hsCode: [null, Validators.required],
      isDangerous: [null, Validators.required],
      temperatureControlRequired: [null, Validators.required],
      status: [null, Validators.required]
    });
  }

  loadCommodityData(id: string): void {
    this.isLoading = true;
    this.commodityService.getSingleCommodity(id).subscribe(
      (res: any) => {
        if (res && res.data) {
          this.commodity = res.data;  
        }
        this.isLoading = false;
        this.toastr.success('Commodity data loaded successfully.');
      },
      (err: any) => {
        console.error('Error fetching commodity data');
        this.isLoading = false;
        this.toastr.error('Error fetching commodity data.');
      }
    );
  }

  onSubmit(): void {
    if (this.commodityForm.valid) {  
      const commodityData = this.commodity;  

      if (commodityData.id) {
        this.commodityService.updateCommodity(commodityData).subscribe(
          (res: any) => {
            this.toastr.success('Commodity updated successfully.');
            this.router.navigate(['/customer/table']);
          },
          (err: any) => {
            console.error('Error updating commodity');
            this.toastr.error('Error updating commodity.');
          }
        );
      } else {
        this.commodityService.createCommodity(commodityData).subscribe(
          (res: any) => {
            this.toastr.success('Commodity created successfully.');
            this.router.navigate(['/customer/table']);
          },
          (err: any) => {
            console.error('Error creating commodity');
            this.toastr.error('Error creating commodity.');
          }
        );
      }
    } else {
      this.toastr.error('Form is invalid. Please fill out all required fields.');
    }
  }
}
