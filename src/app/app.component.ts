import { Component } from '@angular/core';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workSync-frontend';
  message = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getHello().subscribe((data) => {
      this.message = data;
    });
  }


  clicking(){
    // this.apiService.getHello().subscribe((data) => {
    //   this.message = data;
    // });
  }
}
