import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

import { MenuIcon } from '../../../core/interfaces/dashboard.interface';

export interface NavItem {
    readonly name: string;
    readonly icon: MenuIcon;
    readonly active: boolean;
    readonly route?: string;
}

@Component({
    selector: 'app-mobile-nav',
    standalone: true,
    imports: [IconComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <nav class="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30">
      <div class="flex justify-around">
        @for (item of navItems(); track item.name) {
          <button 
            class="flex flex-col items-center py-2 px-3 flex-1"
            [class]="item.active ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'"
            (click)="onNavItemClick.emit(item)"
          >
            <app-icon 
              [name]="item.icon" 
              size="w-5 h-5" 
            />
            <span class="text-xs mt-1 font-medium">{{ item.name }}</span>
          </button>
        }
      </div>
    </nav>
  `
})
export class MobileNavComponent {
    readonly navItems = input.required<readonly NavItem[]>();
    readonly onNavItemClick = output<NavItem>();
}
