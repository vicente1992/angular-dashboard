import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    userName = 'Maryuandi';
    readonly onToggleMobileMenu = output<void>();

    protected toggleMobileMenu(): void {
        this.onToggleMobileMenu.emit();
    }
}
