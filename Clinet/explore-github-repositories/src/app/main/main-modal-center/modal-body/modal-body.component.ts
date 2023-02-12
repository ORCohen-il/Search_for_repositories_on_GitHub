import { Component, Input } from '@angular/core';
import { repository } from 'src/assets/models/repository';

@Component({
  selector: 'app-modal-body',
  templateUrl: './modal-body.component.html',
  styleUrls: ['./modal-body.component.scss']
})
export class ModalBodyComponent {
  @Input() repoItem!: repository; 
}
