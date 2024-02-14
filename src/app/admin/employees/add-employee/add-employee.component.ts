import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition, } from '@angular/animations';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  animations: [
    trigger('formAnimation', [
      state('void', style({ opacity: 0, transform: 'translateX(-100%)' })),
      transition(':enter, :leave', animate('0.5s ease-out'))
    ])
  ]
})
export class AddEmployeeComponent {
  employeeForm: FormGroup;
  animationState: string = 'in'; // Initial animation state

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      // Personal Information
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', [Validators.required, Validators.minLength(10)]], // Minimum length for date format validation
      gender: ['', Validators.required],
    
      // Contact Information
      email: ['', [Validators.required, Validators.email]], // Email validation
      phoneNumber: ['', Validators.required], // Phone number validation can be more specific based on country/region
    
      // Hire Date and Department
      hireDate: ['', Validators.required],
      department: ['', Validators.required],
    
      // Role/Position
      position: ['', Validators.required],
    
      // Additional Fields (optional, based on your requirements)
    });
    
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const formValues = this.employeeForm.value;
      console.log('Input values:', formValues); // Log to console

      
    } else {
      console.error('Form is invalid:', this.employeeForm.errors); // Handle invalid form state
    }
  }
}
