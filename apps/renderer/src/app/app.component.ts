import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {TestComponent} from './test/test.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, TestComponent],
  selector: 'dgr-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'renderer';
}
