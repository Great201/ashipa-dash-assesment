import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface SidebarItem {
  label: string;
  icon: string;
  active?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  mainMenu: SidebarItem[] = [
    { label: 'Home', icon: 'home' },
    { label: 'Audits', icon: 'assignment', active: true },
    { label: 'Payments', icon: 'payments' },
    { label: 'Administrators', icon: 'admin_panel_settings' },
    { label: 'Insights', icon: 'insights' }
  ];

  preferences: SidebarItem[] = [
    { label: 'Settings', icon: 'settings' },
    { label: 'Billing', icon: 'credit_card' }
  ];
}
