import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContentService } from 'src/service/content/content.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ContentService]
})
export class ChildComponentComponent {

  @Input() data!: { name: string };

  childCounter = 0;

  updateChildData() {
    this.childCounter++;
  }

  constructor(public contentService: ContentService) {}

  ngOnInit() {
  }

  updateServiceMessage() {
    this.contentService.message = `Updated by child componentg at ${new Date().toLocaleTimeString()}`;
  }

}
