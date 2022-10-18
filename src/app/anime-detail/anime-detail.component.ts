import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'plast-anime-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeDetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
