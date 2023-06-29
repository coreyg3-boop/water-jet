import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from '../../app-routing.module';

/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  standalone: true,
  imports: [AppRoutingModule, MatSidenavModule, NgIf, MatButtonModule],
})
export class SidenavComponent {
  showFiller = false;
}