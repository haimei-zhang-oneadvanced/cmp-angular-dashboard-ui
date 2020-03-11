import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cmp-angular-dashboard-ui';

  sidebarToggled = false;

  toggleSidebar(): void {
    this.sidebarToggled = !this.sidebarToggled;
  }
}
