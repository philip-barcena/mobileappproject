import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../Services/nasa-api.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  searchText: string = ''; // variable to store the search text entered by the user
  images: any[] = []; // an array to hold the images returned by the API

  constructor(private nasaApiService: NasaApiService) { }

  ngOnInit() {
  }

  // function to search for images using the NASA API
  search() {
    this.nasaApiService.searchImages(this.searchText).subscribe(data => { // call the searchImages function of the NasaApiService and subscribe to the data returned
      this.images = data.collection.items; // assign the returned images to the images array
      console.log(data.collection.items); // log the images to the console
    });
  }

}