import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-rounting.module";
import fr from '@angular/common/locales/fr';
import { bootstrapApplication } from '@angular/platform-browser';
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { AppComponent } from "./app.component";
import { FaceSnapComponent } from "./face-snap/face-snap.component";
import { HeaderComponent } from "./header/header.component";
import { registerLocaleData } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapListComponent,
    HeaderComponent,
    FaceSnapComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FaceSnapComponent, Headers, FaceSnapListComponent],
  providers: [{
    provide:LOCALE_ID, useValue: 'fr-FR'
  }],
  bootstrap: [AppComponent],
})
export class AppModule{
  constructor(){
    bootstrapApplication(AppComponent);
    registerLocaleData(fr);
  }
}
