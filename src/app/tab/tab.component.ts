import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';



@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule,MatTabsModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'

})
export class TabComponent {
  isToggle:boolean = true;
  toggle()
  {
    this.isToggle = !this.isToggle;

  }


}
