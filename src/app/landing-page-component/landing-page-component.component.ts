import { Component, NgModule, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page-component',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './landing-page-component.component.html',
  styleUrl: './landing-page-component.component.scss'
})


export class LandingPageComponentComponent implements OnInit{

  constructor(private router : Router) { }
  ngOnInit(): void {

  }
  onContinue() : void{
    this.router.navigateByUrl('/faceSnap')
  }
}
