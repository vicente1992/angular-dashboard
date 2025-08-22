/**
 * Pure utility functions for data formatting
 */

export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(amount);
};

export const formatPercentage = (value: number): string => {
    return `${value > 0 ? '+' : ''}${value}%`;
};

export const getStatusColor = (status: string): { text: string; bg: string } => {
    const statusColors = {
        'Success': { text: 'text-green-600', bg: 'bg-green-100' },
        'Processing': { text: 'text-gray-500', bg: 'bg-blue-100' },
        'Declined': { text: 'text-red-600', bg: 'bg-red-100' }
    } as const;

    return statusColors[status as keyof typeof statusColors] || statusColors.Processing;
};

export const getStatusDotColor = (statusColor: string): string => {
    const dotColors = {
        'text-green-600': 'bg-green-500',
        'text-red-600': 'bg-red-500',
        'text-gray-500': 'bg-blue-500'
    } as const;

    return dotColors[statusColor as keyof typeof dotColors] || 'bg-blue-500';
};
