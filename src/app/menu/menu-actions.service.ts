import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MenuActionsService {
  execute(action: string): void {
    const actions: Record<string, () => void> = {
      profile: () => console.log('Profile clicked'),
      billing: () => console.log('Billing clicked'),
      settings: () => console.log('Settings clicked'),
      keyboard: () => console.log('Keyboard shortcuts clicked'),
      team: () => console.log('Team clicked'),
      newTeam: () => console.log('New Team clicked'),
      github: () => console.log('GitHub clicked'),
      support: () => console.log('Support clicked'),
      api: () => console.log('API clicked'),
      logout: () => console.log('Log out clicked')
    };

    actions[action]?.();
  }
}
