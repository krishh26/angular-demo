import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentService } from 'src/service/content/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [ContentService]
})
export class AppComponent {
  title = 'angular-demo';
  counter = 0;
  dataObject = { name: 'Initial' };

  updatePrimitive() {
    this.counter++;
  }

  updateNonPrimitive() {
    this.dataObject = { ...this.dataObject, name: `Updated ${this.counter}` };
  }

  constructor(public contentService: ContentService) { }

  ngOnInit() {
  }

  updateServiceMessage() {
    this.contentService.message = `Updated by parent component at ${new Date().toLocaleTimeString()}`;
  }
}
