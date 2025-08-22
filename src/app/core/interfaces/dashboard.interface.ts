export interface Pocket {
    id: string;
    name: string;
    accountNumber: string;
    balance: number;
    icon: PocketIcon;
    color: string;
}

export interface PocketIcon {
    type: 'brown-bag' | 'yellow-bag' | 'green-bag';
    color: string;
}

export interface ChartData {
    total: number;
    change: number;
    isPositive: boolean;
    months: string[];
    values: number[];
}

export interface Contact {
    id: string;
    name: string;
    bank: string;
    account: string;
    avatar: string;
}

export interface Transaction {
    id: string;
    name: string;
    company: string;
    amount: number;
    date: string;
    type: TransactionType;
    status: TransactionStatus;
    statusColor: string;
    statusBg: string;
    executedBy: ExecutedBy;
    checked: boolean;
}

export type TransactionType = 'Investment' | 'Monthly' | 'Entertainment';
export type TransactionStatus = 'Processing' | 'Success' | 'Declined';

export interface ExecutedBy {
    name: string;
    email: string;
    avatar: string;
}

export interface MenuItem {
    name: string;
    icon: MenuIcon;
    active: boolean;
    route?: string;
}

export type MenuIcon = 'grid' | 'dollar-sign' | 'file-text' | 'credit-card' | 'lightbulb' | 'gift' | 'help-circle' | 'message-circle' | 'settings' | 'log-out';
