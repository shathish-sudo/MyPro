import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TabComponent } from "./tab/tab.component";
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, TabComponent, MatTabsModule]
})
export class AppComponent {
  title = 'MyPro';
}
