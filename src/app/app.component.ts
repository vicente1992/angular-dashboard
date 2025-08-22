import { Component, signal } from '@angular/core';
import { SidebarComponent } from '@core/components/sidebar/sidebar.component';
import { MobileNavComponent, NavItem } from '@shared/components/mobile-nav/mobile-nav.component';
import { HeaderComponent } from '@core/components/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, HeaderComponent, DashboardComponent, MobileNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  // Mobile menu state
  private readonly _isMobileMenuOpen = signal(false);
  readonly isMobileMenuOpen = this._isMobileMenuOpen.asReadonly();

  // Mobile navigation items
  readonly mobileNavItems: readonly NavItem[] = [
    { name: 'Home', icon: 'grid', active: true },
    { name: 'Stats', icon: 'lightbulb', active: false },
    { name: 'Cards', icon: 'credit-card', active: false },
    { name: 'Account', icon: 'settings', active: false }
  ];

  toggleMobileMenu(): void {
    this._isMobileMenuOpen.update(open => !open);
  }

  closeMobileMenu(): void {
    this._isMobileMenuOpen.set(false);
  }

  protected onMobileNavClick(item: NavItem): void {
    console.log('Mobile nav clicked:', item.name);
  }
}
