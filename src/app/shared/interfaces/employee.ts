export interface Employee {
    // employee.interface.ts
    // Personal Information
    firstName: string;
    lastName: string;
    dateOfBirth: string; // Assuming date is a string for simplicity
    gender: string;
  
    // Contact Information
    email: string;
    phoneNumber: string;
  
    // Hire Date and Department
    hireDate: string;
    department: string;
  
    // Role/Position
    position: string;
}
