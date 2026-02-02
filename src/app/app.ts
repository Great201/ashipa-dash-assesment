import { Component, computed, inject } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { MetricsComponent, MetricCard } from './components/metrics/metrics.component';
import { DataTableComponent, TableColumn } from './components/data-table/data-table.component';
import { AuditDataService } from './services/audit-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, TopbarComponent, MetricsComponent, DataTableComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private dataService = inject(AuditDataService);

  metrics: MetricCard[] = [
    {
      label: 'Total Audits',
      value: '245',
      iconPath: '/bx-notepad.svg',
      accent: '#0d7f3f',
      tint: '#e3f7ec'
    },
    {
      label: 'Total Sites',
      value: '9',
      iconPath: '/Vector.svg',
      accent: '#1a4fb8',
      tint: '#e6efff'
    },
    {
      label: 'Community Audits',
      value: '200',
      iconPath: '/bx-detail.svg',
      accent: '#d92382',
      tint: '#ffe7f3'
    },
    {
      label: 'Self Audits',
      value: '45',
      iconPath: '/bx-user-circle.svg',
      accent: '#1f5eb8',
      tint: '#e6f0ff'
    }
  ];

  allSitesColumns: TableColumn[] = [
    { key: 'name', label: 'Name' },
    { key: 'capacity', label: 'Est. PV Capacity' },
    { key: 'siteId', label: 'Site ID' },
    { key: 'audits', label: 'No. of Audits' },
    { key: 'lat', label: 'Long/Lat' },
    { key: 'region', label: 'Region' },
    { key: 'country', label: 'Country' }
  ];

  selfAuditColumns: TableColumn[] = [
    { key: 'name', label: 'Name' },
    { key: 'capacity', label: 'Est. PV Capacity' },
    { key: 'loadPointId', label: 'Load point ID' },
    { key: 'buildingType', label: 'Building Type' },
    { key: 'lat', label: 'Long/Lat' },
    { key: 'region', label: 'Region' },
    { key: 'country', label: 'Country' }
  ];

  allSites = computed(() => this.dataService.allSites());
  selfAudits = computed(() => this.dataService.selfAudits());
}
