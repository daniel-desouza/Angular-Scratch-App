import { Component, HostBinding } from '@angular/core';
import { User } from './_models/user';
import { AuthenticationService } from './_services/authentication.service';
import { Router } from '@angular/router';
import { OverlayContainer} from '@angular/cdk/overlay';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scratch-app';
  currentUser: User;
  darkTheme: false;
  @HostBinding('class') componentCssClass;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    public overlayContainer: OverlayContainer
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  onSetTheme($event: MatSlideToggleChange) {
    if ($event.checked) {
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
      this.componentCssClass = 'dark-theme';
    } else {
      this.overlayContainer.getContainerElement().classList.add('light-theme');
      this.componentCssClass = 'light-theme';
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
