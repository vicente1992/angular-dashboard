import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { Transaction } from '@core/interfaces/dashboard.interface';
import { formatCurrency, getStatusDotColor } from '@shared/utils/formatters.util';
import { AvatarComponent } from '@shared/components/avatar/avatar.component';

@Component({
  selector: 'app-transactions-table',
  standalone: true,
  imports: [AvatarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-white rounded-xl shadow-sm border border-gray-100">
      <div class="p-4 sm:p-6 border-b border-gray-200">
        <div class="flex items-center justify-between">
          <h3 class="text-base sm:text-lg font-semibold text-gray-900">Latest Transactions</h3>
          <button class="p-2 hover:bg-gray-100 rounded-lg">
            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
              </path>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Desktop Table -->
      <div class="hidden lg:block overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div class="flex items-center space-x-2">
                  <input type="checkbox" class="rounded border-gray-300">
                  <span>Transactions name</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z">
                    </path>
                  </svg>
                </div>
              </th>
              <th class="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Money amount
              </th>
              <th class="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div class="flex items-center space-x-2">
                  <span>Delivery date</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </th>
              <th class="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div class="flex items-center space-x-2">
                  <span>Type</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                    </path>
                  </svg>
                </div>
              </th>
              <th class="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th class="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Executed by
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            @for (transaction of transactions(); track transaction.id) {
              <tr class="hover:bg-gray-50">
                <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center space-x-3">
                    <input 
                      type="checkbox" 
                      [checked]="transaction.checked" 
                      class="rounded border-gray-300"
                      (change)="onCheckboxChange($event, transaction.id)"
                    >
                    <div>
                      <div class="text-sm font-medium text-gray-900">{{ transaction.name }}</div>
                      <div class="text-sm text-gray-500">{{ transaction.company }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {{ formatCurrency(transaction.amount) }}
                </td>
                <td class="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ transaction.date }}
                </td>
                <td class="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ transaction.type }}
                </td>
                <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium {{ transaction.statusBg }} {{ transaction.statusColor }}">
                    <span class="w-2 h-2 rounded-full mr-1.5" [class]="getStatusDotColor(transaction.statusColor)"></span>
                    {{ transaction.status }}
                  </span>
                </td>
                <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center space-x-3">
                    <app-avatar [name]="transaction.executedBy.name" size="w-6 h-6 sm:w-8 sm:h-8" />
                    <div>
                      <div class="text-sm font-medium text-gray-900">{{ transaction.executedBy.name }}</div>
                      <div class="text-sm text-gray-500">{{ transaction.executedBy.email }}</div>
                    </div>
                  </div>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>

      <!-- Mobile Cards -->
      <div class="lg:hidden">
        @for (transaction of transactions(); track transaction.id) {
          <div class="p-4 border-b border-gray-200 last:border-b-0">
            <div class="flex items-start justify-between mb-3">
              <div class="flex items-center space-x-3 flex-1 min-w-0">
                <input 
                  type="checkbox" 
                  [checked]="transaction.checked" 
                  class="rounded border-gray-300 mt-1"
                  (change)="onCheckboxChange($event, transaction.id)"
                >
                <div class="flex-1 min-w-0">
                  <div class="text-sm font-medium text-gray-900 truncate">{{ transaction.name }}</div>
                  <div class="text-xs text-gray-500 truncate">{{ transaction.company }}</div>
                </div>
              </div>
              <div class="text-right">
                <div class="text-sm font-medium text-gray-900">{{ formatCurrency(transaction.amount) }}</div>
                <div class="text-xs text-gray-500">{{ transaction.date }}</div>
              </div>
            </div>
            
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium {{ transaction.statusBg }} {{ transaction.statusColor }}">
                  <span class="w-1.5 h-1.5 rounded-full mr-1" [class]="getStatusDotColor(transaction.statusColor)"></span>
                  {{ transaction.status }}
                </span>
                <span class="text-xs text-gray-500">{{ transaction.type }}</span>
              </div>
              
              <div class="flex items-center space-x-2">
                <app-avatar [name]="transaction.executedBy.name" size="w-6 h-6" />
                <div class="text-xs text-gray-500 truncate max-w-20">
                  {{ transaction.executedBy.name }}
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `
})
export class TransactionsTableComponent {
  readonly transactions = input.required<readonly Transaction[]>();
  readonly onTransactionToggle = output<{ id: string; checked: boolean }>();

  protected formatCurrency = formatCurrency;
  protected getStatusDotColor = getStatusDotColor;

  protected onCheckboxChange(event: Event, transactionId: string): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.onTransactionToggle.emit({ id: transactionId, checked: target.checked });
    }
  }
}
