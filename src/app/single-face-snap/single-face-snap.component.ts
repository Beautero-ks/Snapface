import { Component, Input } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnap } from '../models/face-snaps.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgClass, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [NgClass, NgStyle, NgIf, RouterLink],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent {
  facesnaps!: FaceSnap ;
  userHasSnap! : boolean;

  constructor(private faceSnapService : FaceSnapsService,
              private route: ActivatedRoute
  ) { }

  buttonText!: string;

  ngOnInit(): void {
      this.userSnap();
      this.getFaceSnap();
  }

  onSnaps(){
    if(this.buttonText === "Oh snaps"){
      this.faceSnapService.snapFaceSnapById(this.facesnaps.id, 'snaps');
      this.buttonText = "Oops unSnaps";
    }else{
      this.faceSnapService.snapFaceSnapById(this.facesnaps.id, 'unSnaps');
      this.buttonText = "Oh snaps";
    }
  }



  private userSnap() : void {
    this.buttonText = "Oh snaps";
      this.userHasSnap = false;
  }

  private getFaceSnap() : void {
    const faceSnapId = +this.route.snapshot.params['id'];
      this.facesnaps = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

}
