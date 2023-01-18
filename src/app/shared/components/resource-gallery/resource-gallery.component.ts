import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NgForOf, NgIf, SlicePipe } from '@angular/common';
import { ResourceCardComponent } from '@shared-components/resource-card/resource-card.component';
import { Anime, Manga } from '@tutkli/jikan-ts';

@Component({
  selector: 'plast-resource-gallery',
  standalone: true,
  imports: [ResourceCardComponent, NgIf, NgForOf, SlicePipe],
  templateUrl: './resource-gallery.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourceGalleryComponent implements OnInit {
  @Input() resources: Anime[] | Manga[] | null | undefined;
  @Input() resourceType: 'anime' | 'manga' | undefined;
  @Input() maxItems = 25;
  placeHolderResources!: number[];

  ngOnInit(): void {
    this.placeHolderResources = new Array(this.maxItems);
  }
}
