import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { NgForOf } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { FaceSnapComponent } from './face-snap/face-snap.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RouterLink, FaceSnapListComponent, FaceSnapComponent, NgForOf, HeaderComponent]
})
export class AppComponent {

  ngOnInit(): void {}
}
