import { Component, input, output, ChangeDetectionStrategy, computed } from '@angular/core';
import { Pocket } from '@core/interfaces/dashboard.interface';
import { formatCurrency } from '@shared/utils/formatters.util';
import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
  selector: 'app-pocket-card',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
      <div class="flex items-start justify-between mb-3 sm:mb-4">
        <div class="flex items-center space-x-2 sm:space-x-3">
          <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center" [class]="pocket().color">
            <app-icon name="dollar-sign" size="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 text-sm sm:text-base">{{ pocket().name }}</h3>
            <p class="text-xs sm:text-sm text-gray-500">{{ pocket().accountNumber }}</p>
          </div>
        </div>
        <div class="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-sm"></div>
      </div>
      
      <div class="mb-3 sm:mb-4">
        <p class="text-2xl sm:text-3xl font-bold text-gray-900">{{ formattedBalance() }}</p>
      </div>
      
      <button 
        class="text-blue-600 text-xs sm:text-sm font-medium hover:text-blue-700 flex items-center"
        (click)="onViewTransactions.emit(pocket().id)"
      >
        View Transactions
        <svg class="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  `
})
export class PocketCardComponent {
  readonly pocket = input.required<Pocket>();
  readonly onViewTransactions = output<string>();

  protected formattedBalance = computed(() => formatCurrency(this.pocket().balance));
}
