import { RouterOutlet } from '@angular/router';
import { FaceSnapsService } from './../services/face-snaps.service';
import { Component, OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snaps.model';
import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { NgFor, NgForOf, NgIf } from '@angular/common';


@Component({
    selector: 'app-face-snap-list',
    standalone: true,
    templateUrl: './face-snap-list.component.html',
    styleUrl: './face-snap-list.component.scss',
    imports: [RouterOutlet, FaceSnapComponent, NgFor, NgForOf, NgIf]
})
export class FaceSnapListComponent implements OnInit{
  faceSnaps! : FaceSnap[];
  constructor(private faceSnapsServices: FaceSnapsService){}

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsServices.getAllFaceSnaps();
  }
}
