import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { ResourceCardComponent } from '@shared-components/resource-card/resource-card.component';
import { MaxItemsPipe } from '@pipes/max-items/max-items.pipe';
import { Anime, Manga } from '@tutkli/jikan-ts';

@Component({
  selector: 'plast-resource-gallery',
  standalone: true,
  imports: [ResourceCardComponent, MaxItemsPipe, NgIf, NgForOf],
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
