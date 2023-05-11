import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../Services/nasa-api.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  nasaData: any;

  constructor(private nasaApiService: NasaApiService) { }

  ngOnInit() {
    // Call getNasaData method on component initialization
    this.getNasaData();
  }

  /**
   * Retrieves astronomy picture of the day from NASA API
   */
  getNasaData() {
    // Subscribe to the observable returned by getAstronomyPicture method in NasaApiService
    // Assign the returned data to nasaData property of the component
    this.nasaApiService.getAstronomyPicture().subscribe(data => {
      this.nasaData = data;
    });
  }
}