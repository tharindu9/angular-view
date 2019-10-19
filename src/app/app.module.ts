import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DemoMaterialModule} from './matirial-module';
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {BodrimaService} from './bodrima.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { WallComponent } from './wall/wall.component';
import { environment } from '../environments/environment';
import { ViewBordingComponent } from './view-bording/view-bording.component';
import {NgPipesModule} from 'ngx-pipes';



@NgModule({
  declarations: [
    AppComponent,
    WallComponent,
    ViewBordingComponent
  ],
  entryComponents: [WallComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    DemoMaterialModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
