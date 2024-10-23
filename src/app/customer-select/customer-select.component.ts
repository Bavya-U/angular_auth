import { Component, OnInit } from '@angular/core';
import { NgAutoCompleteModule } from 'ng-auto-complete';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-select',
  templateUrl: './customer-select.component.html',
  styleUrls: ['./customer-select.component.css']
})
export class CustomerSelectComponent implements OnInit {

  // constructor() { 
  //   this.filteredItems = this.items;
  // }

  ngOnInit(): void {
  }

  items = [
    { id: 1, name: 'Amsavarthini' },
    { id: 2, name: 'Agalya' },
    { id: 3, name: 'Bavya' },
    { id: 4, name: 'Bhuvi' },
    { id: 5, name: 'Siby' },
    { id: 6, name: 'Tamil' },
    { id: 7, name: 'Abu' },
    { id: 8, name: 'Agas' },
    { id: 9, name: 'Rakesh' },
    { id: 10, name: 'Ruban' }
  ];

  selectedNgSelectItem: number | null = null;
  // // selectedAutoCompleteItem: number | null = null;
  // selectedAutoCompleteItem: any; // To hold the selected item's ID
  // filteredItems: any[] = []; // To hold filtered items
  // notFound: boolean = false; // To track if no items are found


  // onSearch(term: string): void {
  //   // Filter items based on user input
  //   this.filteredItems = this.items.filter(item =>
  //     item.name.toLowerCase().includes(term.toLowerCase())
  //   );

  //   // Set notFound to true if no items are found
  //   this.notFound = this.filteredItems.length === 0;
  // }



  // searchText: string = '';                // Bind this to the input
  // filteredItems: any[] = [];              // Initialize as empty array
  // selectedNgSelectItem: any = null;       // Define the selected item
  // notFound: boolean = false;              // Track if no items are found

  // // Filter items based on input text
  // onInputChanged(searchValue: string): void {
  //   // Only filter if there is input
  //   if (searchValue.length > 0) {
  //     this.filteredItems = this.items.filter(item =>
  //       item.name.toLowerCase().includes(searchValue.toLowerCase())
  //     );

  //     this.notFound = this.filteredItems.length === 0; // Check if no items found
  //   } else {
  //     this.filteredItems = [];  // Clear filtered items if input is empty
  //     this.notFound = false;     // Reset not found
  //   }
  // }

  // // Handle item selection
  // selectItem(item: any): void {
  //   this.selectedNgSelectItem = item;  // Store the selected item
  //   this.searchText = item.name;       // Update input text
  //   this.filteredItems = [];           // Clear filtered items after selection
  // }



  keyword: string = ''; // This binds to the input field
  countries = [
    { name: 'United States' },
    { name: 'India' },
    { name: 'Canada' },
    { name: 'Australia' },
    { name: 'Germany' }
    // Add more country objects as needed
  ];

  // Method triggered when an item is selected
  selectEvent(event: any) {
    console.log('Selected Country:', event);
  }

  // Method triggered when the input value changes
  onChangeSearch(event: string) {
    console.log('Search input:', event);
  }


}
