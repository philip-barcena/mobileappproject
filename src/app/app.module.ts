import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { Page2PageModule } from './page2/page2.module';
import { Page3PageModule } from './page3/page3.module';
import { NasaApiService } from './Services/nasa-api.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, RouterModule,HttpClientModule, Page2PageModule,Page3PageModule],
  providers: [ {provide: RouteReuseStrategy, useClass: IonicRouteStrategy,}, NasaApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
