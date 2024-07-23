import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Button} from "primeng/button";
import {fontAwesomeIcons} from "./shared/font-awesome-icons";
import {FaIconComponent, FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {NavbarComponent} from "./layout/navbar/navbar.component";
import {FooterComponent} from "./layout/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Button, FaIconComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  faIconLibrary = inject(FaIconLibrary)

  ngOnInit(): void {
    this.initFontAwesomeIcons()
  }

  private initFontAwesomeIcons() {
    this.faIconLibrary.addIcons(
      ...fontAwesomeIcons
    )
  }
}
