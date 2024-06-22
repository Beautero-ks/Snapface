import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snaps.model';
import {UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';





@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {

  @Input() facesnaps!: FaceSnap;

  constructor(private router: Router){}

  onViewFaceSnap() {
    this.router.navigateByUrl(`faceSnap/${this.facesnaps.id}`);
  }
}
