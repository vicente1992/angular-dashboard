export interface MenuItem {
  label: string;
  shortcut?: string;
  action: string;
  disabled?: boolean;
  separatorBefore?: boolean;
}

export const MENU_ITEMS: readonly MenuItem[] = [
  { label: 'Profile', shortcut: '⇧⌘P', action: 'profile' },
  { label: 'Billing', shortcut: '⌘B', action: 'billing' },
  { label: 'Settings', shortcut: '⌘S', action: 'settings' },
  { label: 'Keyboard shortcuts', shortcut: '⌘K', action: 'keyboard' },
  { separatorBefore: true, label: 'Team', action: 'team' },
  { label: 'New Team', shortcut: '⌘+T', action: 'newTeam' },
  { separatorBefore: true, label: 'GitHub', action: 'github' },
  { label: 'Support', action: 'support' },
  { label: 'API', action: 'api', disabled: true },
  { separatorBefore: true, label: 'Log out', shortcut: '⇧⌘Q', action: 'logout' }
] as const;

