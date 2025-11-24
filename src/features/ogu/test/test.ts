import { Component } from '@angular/core';
import { SectionContainer } from '../../../shared/ui/containers/section-container/section-container';
import { TwoColumnContainerComponent } from '../../../shared/ui/containers/two-column-container/two-column-container';


@Component({
  selector: 'app-test',
  imports: [SectionContainer, TwoColumnContainerComponent],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class Test {

}
