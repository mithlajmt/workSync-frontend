import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthguardService } from "../shared/services/authguard.service";

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuard implements CanActivate {
  constructor(private authService: AuthguardService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isLoggedIn) {
      return true; // Allow access if not logged in
    } else {
      this.router.navigate(['home']); // Redirect to home if logged in
      return false; // Prevent access to the guarded route
    }
  }
}

