import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public loginForm: FormGroup = new FormGroup({
    username: new FormControl<string | null>(null, Validators.required),
    password: new FormControl<string | null>(null, Validators.required)
  });

  public isPasswordVisible: boolean = false;

  constructor(public authService: AuthService, private router: Router, private snackBar: MatSnackBar) { }

  public login(): void {
    const username = this.loginForm.get("username")?.value ?? "";
    const password = this.loginForm.get("password")?.value ?? "";

    this.authService.login(username, password).subscribe({
      next: () => {
        this.openSnackBar("Login bem-sucedido! Redirecionando à página inicial");
        this.router.navigate(["home"]);
      },
      error: () => {
        this.openSnackBar("Aconteceu algum problema no login! Cheque as credenciais e tente novamente");
      }
    });
  }

  public logout(): void {
    this.authService.logout();
  }

  private openSnackBar(message: string) {
    this.snackBar.open(message);
  }
}
