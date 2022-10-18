import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Genre } from '../../../core/models/genre/genre.model';
import { FlexModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'plast-genre-card',
  standalone: true,
  imports: [CommonModule, FlexModule, MatIconModule],
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenreCardComponent implements OnInit {
  @Input() genre!: Genre;
  backgroundColor!: string;

  ngOnInit(): void {
    // this.generateBackgroundColor();
  }

  generateBackgroundColor(): void {
    this.backgroundColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
  }
}
