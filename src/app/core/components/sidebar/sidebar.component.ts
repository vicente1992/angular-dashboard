import { Component, inject, ChangeDetectionStrategy, output } from '@angular/core';
import { DashboardService } from '@features/dashboard/services/dashboard.service';
import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [IconComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
    private readonly dashboardService = inject(DashboardService);

    // Signals from service
    readonly menuItems = this.dashboardService.menuItems;
    readonly supportItems = this.dashboardService.supportItems;
    readonly bottomItems = this.dashboardService.bottomItems;

    // Output for mobile menu
    readonly onCloseMobileMenu = output<void>();

    protected onMenuItemClick(menuName: string): void {
        this.dashboardService.updateMenuActiveState(menuName);
        // Close mobile menu when item is clicked
        this.closeMobileMenu();
    }

    protected closeMobileMenu(): void {
        this.onCloseMobileMenu.emit();
    }
}
