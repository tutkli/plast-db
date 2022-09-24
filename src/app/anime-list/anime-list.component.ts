import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'plast-anime-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
