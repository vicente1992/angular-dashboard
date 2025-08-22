import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { DashboardService } from '@features/dashboard/services/dashboard.service';
import { PocketCardComponent } from '@features/dashboard/components/pocket-card/pocket-card.component';
import { ChartCardComponent } from '@features/dashboard/components/chart-card/chart-card.component';
import { QuickTransferCardComponent } from '@features/dashboard/components/quick-transfer-card/quick-transfer-card.component';
import { TransactionsTableComponent } from '@features/dashboard/components/transactions-table/transactions-table.component';
import { Contact } from '@core/interfaces/dashboard.interface';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        PocketCardComponent,
        ChartCardComponent,
        QuickTransferCardComponent,
        TransactionsTableComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    private readonly dashboardService = inject(DashboardService);

    // Signals from service
    readonly pockets = this.dashboardService.pockets;
    readonly spendingData = this.dashboardService.spendingData;
    readonly incomeData = this.dashboardService.incomeData;
    readonly recentContacts = this.dashboardService.recentContacts;
    readonly transactions = this.dashboardService.transactions;

    // Computed values
    readonly totalBalance = this.dashboardService.totalBalance;
    readonly totalTransactions = this.dashboardService.totalTransactions;
    readonly checkedTransactions = this.dashboardService.checkedTransactions;

    protected onViewTransactions(pocketId: string): void {
        console.log('View transactions for pocket:', pocketId);
    }

    protected onTransactionToggle(data: { id: string; checked: boolean }): void {
        this.dashboardService.updateTransactionStatus(data.id, data.checked);
    }

    protected onSendMoney(): void {
        console.log('Send money action');
    }

    protected onRequestMoney(): void {
        console.log('Request money action');
    }

    protected onContactSelect(contact: Contact): void {
        console.log('Selected contact:', contact);
    }
}
