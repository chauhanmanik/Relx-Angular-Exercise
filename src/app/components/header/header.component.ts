import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatSlideToggleModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private router = inject(Router);
  private sharedDataService = inject(SharedDataService);

  private authenticatedText = 'User authenticated';
  private notAuthenticatedText = 'User not authenticated';

  public userAuthenticated = signal<boolean>(true);
  public toggledText = signal<string>(this.authenticatedText);

  public onAuthentication() {
    const isAuthenticated = !this.userAuthenticated();

    this.userAuthenticated.set(isAuthenticated);
    this.sharedDataService.userAuthentication.set(isAuthenticated);

    if (isAuthenticated) {
      this.toggledText.set(this.authenticatedText);
    } else {
      this.toggledText.set(this.notAuthenticatedText);
    }
  }

  public onHome() {
    this.router.navigate(['home']);
  }
}
