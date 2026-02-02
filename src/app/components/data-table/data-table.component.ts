import { Component, computed, effect, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

export interface TableColumn {
  key: string;
  label: string;
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatSelectModule, MatTableModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
  title = input<string>('');
  columns = input<TableColumn[]>([]);
  rows = input<ReadonlyArray<Record<string, string | number>>>([]);
  showViewAll = input<boolean>(true);

  pageIndex = signal(0);
  pageSize = signal(5);
  pageSizeOptions = [5, 10, 15];

  displayedColumns = computed(() => this.columns().map((column) => column.key));
  totalRows = computed(() => this.rows().length);
  pageCount = computed(() => Math.max(1, Math.ceil(this.totalRows() / this.pageSize())));

  pagedRows = computed(() => {
    const start = this.pageIndex() * this.pageSize();
    const end = start + this.pageSize();
    return this.rows().slice(start, end);
  });

  rangeLabel = computed(() => {
    if (this.totalRows() === 0) {
      return '0-0 of 0';
    }
    const start = this.pageIndex() * this.pageSize() + 1;
    const end = Math.min(this.totalRows(), start + this.pageSize() - 1);
    return `${start}-${end} of ${this.totalRows()}`;
  });

  constructor() {
    effect(() => {
      const maxIndex = Math.max(0, this.pageCount() - 1);
      if (this.pageIndex() > maxIndex) {
        this.pageIndex.set(maxIndex);
      }
    });
  }

  prevPage(): void {
    this.pageIndex.update((value) => Math.max(0, value - 1));
  }

  nextPage(): void {
    this.pageIndex.update((value) => Math.min(this.pageCount() - 1, value + 1));
  }

  updatePageSize(value: number): void {
    this.pageSize.set(value);
    this.pageIndex.set(0);
  }
}
