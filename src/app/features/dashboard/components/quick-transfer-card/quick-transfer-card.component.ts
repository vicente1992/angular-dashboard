import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { Contact } from '@core/interfaces/dashboard.interface';
import { AvatarComponent } from '@shared/components/avatar/avatar.component';

@Component({
  selector: 'app-quick-transfer-card',
  standalone: true,
  imports: [AvatarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
      <div class="flex items-center justify-between mb-4 sm:mb-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900">Quick Transfer</h3>
        <a href="#" class="text-blue-600 text-xs sm:text-sm font-medium hover:text-blue-700">Change</a>
      </div>
      
      <!-- VISA Card -->
      <div class="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 text-white">
        <div class="flex justify-between items-start mb-3 sm:mb-4">
          <span class="text-base sm:text-lg font-bold">VISA</span>
          <svg class="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div class="mb-3 sm:mb-4">
          <p class="text-xs sm:text-sm opacity-90">Devrizal Maryuandi</p>
          <p class="text-sm sm:text-lg font-mono">0412 0983 1234 2004</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-xs sm:text-sm opacity-90">09/24</span>
        </div>
      </div>
      
      <!-- Action Buttons -->
      <div class="flex space-x-2 sm:space-x-3 mb-4 sm:mb-6">
        <button 
          class="flex-1 py-2 px-3 sm:px-4 bg-gray-100 text-gray-700 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors"
          (click)="onSend.emit()"
        >
          Send
        </button>
        <button 
          class="flex-1 py-2 px-3 sm:px-4 bg-gray-100 text-gray-700 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors"
          (click)="onRequest.emit()"
        >
          Request
        </button>
      </div>
      
      <!-- Recent Contacts -->
      <div>
        <h4 class="text-xs sm:text-sm font-medium text-gray-900 mb-2 sm:mb-3">Recent Contacts</h4>
        <div class="space-y-2 sm:space-y-3">
          @for (contact of contacts(); track contact.id) {
            <div 
              class="flex items-center space-x-2 sm:space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
              (click)="onContactSelect.emit(contact)"
            >
              <app-avatar [name]="contact.name" size="w-6 h-6 sm:w-8 sm:h-8" />
              <div class="flex-1 min-w-0">
                <p class="text-xs sm:text-sm font-medium text-gray-900 truncate">{{ contact.name }}</p>
                <p class="text-xs text-gray-500 truncate">{{ contact.bank }} - {{ contact.account }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `
})
export class QuickTransferCardComponent {
  readonly contacts = input.required<readonly Contact[]>();
  readonly onSend = output<void>();
  readonly onRequest = output<void>();
  readonly onContactSelect = output<Contact>();
}
