import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component,  inject, signal } from '@angular/core';
import { ZardButtonComponent } from '@shared/components/button/button.component';
import { ZardDividerComponent } from '@shared/components/divider/divider.component';
import { ZardDropdownModule } from '@shared/components/dropdown/dropdown.module';
import { MENU_ITEMS } from '../menu.config';
import { MenuActionsService } from '../menu-actions.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,  ZardDropdownModule, ZardButtonComponent, ZardDividerComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
 readonly menuItems = signal(MENU_ITEMS);
  private readonly actions = inject(MenuActionsService);

  handleAction(action: string): void {
    this.actions.execute(action);
  }
}
