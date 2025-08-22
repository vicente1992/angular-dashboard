import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { MenuIcon } from '../../../core/interfaces/dashboard.interface';

@Component({
    selector: 'app-icon',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <svg 
      class="w-5 h-5" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      [class]="size()"
    >
      @switch (name()) {
        @case ('grid') {
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
          </path>
        }
        @case ('dollar-sign') {
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1">
          </path>
        }
        @case ('file-text') {
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
          </path>
        }
        @case ('credit-card') {
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z">
          </path>
        }
        @case ('lightbulb') {
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
          </path>
        }
        @case ('gift') {
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7">
          </path>
        }
        @case ('help-circle') {
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
          </path>
        }
        @case ('message-circle') {
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
          </path>
        }
        @case ('settings') {
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
          </path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
          </path>
        }
        @case ('log-out') {
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
          </path>
        }
        @default {
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1">
          </path>
        }
      }
    </svg>
  `
})
export class IconComponent {
    readonly name = input.required<MenuIcon>();
    readonly size = input<string>('w-5 h-5');
}
