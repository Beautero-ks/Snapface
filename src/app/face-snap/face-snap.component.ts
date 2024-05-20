import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description! : string;
  created_at!: Date;
  updated_at!: Date;
  image_url!: string;
  snaps! : number;

  ngOnInit(): void {
      this.image_url = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
      this.title = "Flyerstyle";
      this.description = "Booster votre visibiliter avec les meilleurs flyers de notre platform";
      this.created_at = new Date();
      this.updated_at = new Date();
      this.snaps = 10;
  }
}
