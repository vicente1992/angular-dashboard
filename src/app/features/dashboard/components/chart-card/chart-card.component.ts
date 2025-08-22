import { Component, input, ChangeDetectionStrategy, computed } from '@angular/core';
import { ChartData } from '@core/interfaces/dashboard.interface';
import { formatCurrency, formatPercentage } from '@shared/utils/formatters.util';

@Component({
  selector: 'app-chart-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
      <div class="flex items-center justify-between mb-4 sm:mb-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900">{{ title() }}</h3>
        <select class="text-xs sm:text-sm border border-gray-300 rounded-lg px-2 sm:px-3 py-1 bg-white">
          <option>This Year</option>
        </select>
      </div>
      
      <div class="flex items-center justify-between mb-3 sm:mb-4">
        <p class="text-xl sm:text-2xl font-bold text-gray-900">{{ formattedTotal() }}</p>
        <span 
          class="text-xs sm:text-sm font-medium"
          [class]="chartData().isPositive ? 'text-green-600' : 'text-red-600'"
        >
          {{ formattedChange() }}
        </span>
      </div>
      
      <!-- Simple Chart Representation -->
      <div class="h-24 sm:h-32 flex items-end space-x-1 sm:space-x-2">
        @for (value of chartData().values; track $index) {
          <div 
            class="flex-1 rounded-t" 
            [class]="chartData().isPositive ? 'bg-green-200' : 'bg-red-200'"
            [style.height]="getBarHeight(value) + '%'"
          ></div>
        }
      </div>
      
      <div class="flex justify-between text-xs text-gray-500 mt-2">
        @for (month of chartData().months; track month) {
          <span class="text-xs">{{ month }}</span>
        }
      </div>
    </div>
  `
})
export class ChartCardComponent {
  readonly title = input.required<string>();
  readonly chartData = input.required<ChartData>();

  protected formattedTotal = computed(() => formatCurrency(this.chartData().total));
  protected formattedChange = computed(() => formatPercentage(this.chartData().change));

  protected getBarHeight = (value: number) => {
    const maxValue = Math.max(...this.chartData().values);
    return (value / maxValue) * 100;
  };
}
