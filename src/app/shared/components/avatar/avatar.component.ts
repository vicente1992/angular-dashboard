import { Component, input, ChangeDetectionStrategy, computed } from '@angular/core';

@Component({
    selector: 'app-avatar',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div 
      class="rounded-full flex items-center justify-center bg-blue-500"
      [class]="size()"
    >
      <span class="text-white font-medium" [class]="textSize()">
        {{ initials() }}
      </span>
    </div>
  `
})
export class AvatarComponent {
    readonly name = input.required<string>();
    readonly size = input<string>('w-8 h-8');
    readonly textSize = input<string>('text-xs');

    protected initials = computed(() => {
        return this.name()
            .split(' ')
            .map((word: string) => word.charAt(0))
            .join('')
            .toUpperCase()
            .slice(0, 2);
    });
}
