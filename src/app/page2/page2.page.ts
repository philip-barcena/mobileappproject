import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../Services/nasa-api.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {
  photos: any[] = []; // An array to hold the photos returned by the NASA API
  currentPhotoIndex = 0; // A variable to keep track of the current photo index

  constructor(private nasaApiService: NasaApiService) {}

  ngOnInit() {
    // Fetch the latest photos taken by the Mars Rover 'Perseverance'
    this.nasaApiService.getLatestMarsRoverPhotos('perseverance').subscribe(data => {
      this.photos = data.latest_photos;
    });
  }

  // A function that resizes the image to fit the screen width and auto adjusts height
  onImageLoad(event: Event) {
    const image = event.target as HTMLImageElement;
    image.style.width = '100%';
    image.style.height = 'auto';
  }

  // A function to change the current photo to the next one in the array
  nextPhoto() {
    this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.photos.length;
    console.log(this.photos.length);
  }

}
