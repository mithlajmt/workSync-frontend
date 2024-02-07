import { Component } from '@angular/core';
import { ApiService } from './shared/services/api.service';
import { CommonService } from './shared/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workSync-frontend';
  message = '';

  constructor(private apiService: CommonService) {}

  ngOnInit(): void {
   
  }


  submit(){
    // this.apiService.getHello().subscribe((data) => {
    //   this.message = data;
    // });
    this.apiService.userSignupPost({name:"sudais"}).subscribe({
      next:(res)=>{
        console.log(res);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })

  }
}
