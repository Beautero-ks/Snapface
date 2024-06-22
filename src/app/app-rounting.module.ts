import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import {SingleFaceSnapComponent} from './single-face-snap/single-face-snap.component'

export const routes : Routes =[
  {
    path: 'faceSnap', component: FaceSnapListComponent,
  },
  {
    path: '', component: LandingPageComponentComponent
  },
  {
    path: 'faceSnap/:id', component: SingleFaceSnapComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule{}
