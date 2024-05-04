import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild('username') usernameRef: ElementRef;
  @ViewChild('password') passwordRef: ElementRef;

  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);

  onLogin() {
    const user = this.authService.login(this.usernameRef.nativeElement.value, this.passwordRef.nativeElement.value)

    if (user === null) {
      alert('username or password not found!');
    }
    else {
      alert(`${user.name} is logged in`);
      this.router.navigate(['/home']);
    }
  }
}
