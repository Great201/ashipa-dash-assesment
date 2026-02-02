import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

export interface MetricCard {
  label: string;
  value: string;
  iconPath: string;
  accent: string;
  tint: string;
}

@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './metrics.component.html',
  styleUrl: './metrics.component.css'
})
export class MetricsComponent {
  metrics = input<MetricCard[]>([]);
}
