import { Pocket, ChartData, Contact, Transaction, MenuItem } from '../../core/interfaces/dashboard.interface';

export const POCKETS_DATA: readonly Pocket[] = [
    {
        id: 'primary-pocket',
        name: 'Primary Pocket',
        accountNumber: '02KM NDSD 2380',
        balance: 9473.10,
        icon: { type: 'brown-bag', color: 'bg-amber-100' },
        color: 'bg-amber-100'
    },
    {
        id: 'secondary-pocket',
        name: 'Secondary Pocket',
        accountNumber: 'O2KN DSDA 2380',
        balance: 1812.91,
        icon: { type: 'yellow-bag', color: 'bg-yellow-100' },
        color: 'bg-yellow-100'
    },
    {
        id: 'saving-pocket',
        name: 'Saving Pocket',
        accountNumber: '2KMN DSDA 2380',
        balance: 5399.13,
        icon: { type: 'green-bag', color: 'bg-green-100' },
        color: 'bg-green-100'
    }
] as const;

export const SPENDING_DATA: ChartData = {
    total: 10473.10,
    change: -11.8,
    isPositive: false,
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    values: [8000, 8500, 9000, 12000, 11000, 10500, 10473]
} as const;

export const INCOME_DATA: ChartData = {
    total: 20500.10,
    change: 5.9,
    isPositive: true,
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    values: [18000, 18500, 19000, 22000, 21000, 20500, 20500]
} as const;

export const RECENT_CONTACTS: readonly Contact[] = [
    {
        id: 'contact-1',
        name: 'Oxalade Chamberlain',
        bank: 'BCA',
        account: '2348 7909 8123',
        avatar: 'OC'
    },
    {
        id: 'contact-2',
        name: 'Marking Belingham',
        bank: 'JAGO',
        account: '1231 238 798',
        avatar: 'MB'
    },
    {
        id: 'contact-3',
        name: 'Felicia Reid',
        bank: 'Mandiri',
        account: '101 238 798',
        avatar: 'FR'
    }
] as const;

export const TRANSACTIONS_DATA: readonly Transaction[] = [
    {
        id: 'transaction-1',
        name: 'TSLA BUY',
        company: 'Tesla, Inc.',
        amount: 30021.23,
        date: 'October 30, 2024',
        type: 'Investment',
        status: 'Processing',
        statusColor: 'text-gray-500',
        statusBg: 'bg-blue-100',
        executedBy: {
            name: 'Felicia Reid',
            email: 'felicia.reid@gmail.com',
            avatar: 'FR'
        },
        checked: true
    },
    {
        id: 'transaction-2',
        name: 'MTCH SELL',
        company: 'Match Group, Inc,',
        amount: 10045.00,
        date: 'June 24, 2024',
        type: 'Monthly',
        status: 'Success',
        statusColor: 'text-green-600',
        statusBg: 'bg-green-100',
        executedBy: {
            name: 'Alejandro Mike',
            email: 'Mikeale@gmail.com',
            avatar: 'AM'
        },
        checked: false
    },
    {
        id: 'transaction-3',
        name: 'DDOG BUY',
        company: 'Datadog Inc',
        amount: 40132.16,
        date: 'November 7, 2023',
        type: 'Investment',
        status: 'Success',
        statusColor: 'text-green-600',
        statusBg: 'bg-green-100',
        executedBy: {
            name: 'Debbie Baker',
            email: 'debbie.baker@gmail.com',
            avatar: 'DB'
        },
        checked: true
    },
    {
        id: 'transaction-4',
        name: 'ARKG BUY',
        company: 'ARK Genomic. Inc',
        amount: 22665.12,
        date: 'August 17, 2023',
        type: 'Entertainment',
        status: 'Declined',
        statusColor: 'text-red-600',
        statusBg: 'bg-red-100',
        executedBy: {
            name: 'Nathan Roberts',
            email: 'nathan.roberts@gmail.com',
            avatar: 'NR'
        },
        checked: true
    }
] as const;

export const MENU_ITEMS: readonly MenuItem[] = [
    { name: 'Dashboard', icon: 'grid', active: true, route: '/dashboard' },
    { name: 'Payments', icon: 'dollar-sign', active: false, route: '/payments' },
    { name: 'Invoice', icon: 'file-text', active: false, route: '/invoice' },
    { name: 'Cards', icon: 'credit-card', active: false, route: '/cards' },
    { name: 'Insight', icon: 'lightbulb', active: false, route: '/insight' },
    { name: 'Rewards', icon: 'gift', active: false, route: '/rewards' }
] as const;

export const SUPPORT_ITEMS: readonly MenuItem[] = [
    { name: 'Help', icon: 'help-circle', active: false, route: '/help' },
    { name: 'Feedback', icon: 'message-circle', active: false, route: '/feedback' }
] as const;

export const BOTTOM_ITEMS: readonly MenuItem[] = [
    { name: 'Settings', icon: 'settings', active: false, route: '/settings' },
    { name: 'Logout', icon: 'log-out', active: false, route: '/logout' }
] as const;
