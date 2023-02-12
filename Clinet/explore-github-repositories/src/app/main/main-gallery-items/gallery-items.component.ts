import { Component, Input } from '@angular/core';
import { repository } from 'src/assets/models/repository';

@Component({
  selector: 'app-gallery-items',
  templateUrl: './gallery-items.component.html',
  styleUrls: ['./gallery-items.component.scss'],
})
export class GalleryItemsComponent {
  @Input()
  repoItems: repository[] = [];
}
