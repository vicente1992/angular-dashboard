import { Injectable, signal, computed } from '@angular/core';
import {
    POCKETS_DATA,
    SPENDING_DATA,
    INCOME_DATA,
    RECENT_CONTACTS,
    TRANSACTIONS_DATA,
    MENU_ITEMS,
    SUPPORT_ITEMS,
    BOTTOM_ITEMS
} from '@shared/constants/dashboard.constants';
import { Pocket, ChartData, Contact, Transaction, MenuItem } from '@core/interfaces/dashboard.interface';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    private readonly _pockets = signal<readonly Pocket[]>(POCKETS_DATA);
    private readonly _spendingData = signal<ChartData>(SPENDING_DATA);
    private readonly _incomeData = signal<ChartData>(INCOME_DATA);
    private readonly _recentContacts = signal<readonly Contact[]>(RECENT_CONTACTS);
    private readonly _transactions = signal<readonly Transaction[]>(TRANSACTIONS_DATA);
    private readonly _menuItems = signal<readonly MenuItem[]>(MENU_ITEMS);
    private readonly _supportItems = signal<readonly MenuItem[]>(SUPPORT_ITEMS);
    private readonly _bottomItems = signal<readonly MenuItem[]>(BOTTOM_ITEMS);

    readonly pockets = this._pockets.asReadonly();
    readonly spendingData = this._spendingData.asReadonly();
    readonly incomeData = this._incomeData.asReadonly();
    readonly recentContacts = this._recentContacts.asReadonly();
    readonly transactions = this._transactions.asReadonly();
    readonly menuItems = this._menuItems.asReadonly();
    readonly supportItems = this._supportItems.asReadonly();
    readonly bottomItems = this._bottomItems.asReadonly();

    readonly totalBalance = computed(() =>
        this._pockets().reduce((total, pocket) => total + pocket.balance, 0)
    );

    readonly totalTransactions = computed(() =>
        this._transactions().length
    );

    readonly checkedTransactions = computed(() =>
        this._transactions().filter(t => t.checked).length
    );

    updateTransactionStatus(transactionId: string, checked: boolean): void {
        const updatedTransactions = this._transactions().map(transaction =>
            transaction.id === transactionId
                ? { ...transaction, checked }
                : transaction
        );
        this._transactions.set(updatedTransactions);
    }

    updateMenuActiveState(menuName: string): void {
        const updatedMenuItems = this._menuItems().map(item =>
            ({ ...item, active: item.name === menuName })
        );
        this._menuItems.set(updatedMenuItems);
    }

    getPocketById(id: string): Pocket | undefined {
        return this._pockets().find(pocket => pocket.id === id);
    }

    getTransactionById(id: string): Transaction | undefined {
        return this._transactions().find(transaction => transaction.id === id);
    }
}
