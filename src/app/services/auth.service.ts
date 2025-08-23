import { HttpClient } from '@angular/common/http';
import { Injectable, signal, computed, afterNextRender } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public readonly isUserLoggedIn = computed(() => this._isLoggedIn());

  private _isLoggedIn = signal<boolean>(false);
  private apiUrl: string = "https://fakestoreapi.com/auth/login";

  constructor(private httpClient: HttpClient) {
    afterNextRender(() => {

      const token = localStorage.getItem("login_token");

      if (token) {
        try {
          this._isLoggedIn.set(!!token);
        }
        catch (err) {
        }
      }
    });
  }

  public login(username: string, password: string): Observable<{ token: string }> {
    return this.httpClient.post<{ token: string }>(this.apiUrl, { username, password })
    .pipe(
      tap(response => {
        localStorage.setItem("login_token", response.token);
        this._isLoggedIn.set(true);  // update signal
      })
    );
  }

  public logout(): void {
    localStorage.removeItem("login_token");
    this._isLoggedIn.set(false); // update signal
  }

  public getToken(): string | null {
    return localStorage.getItem("login_token");
  }
}
