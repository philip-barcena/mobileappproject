import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define an interface to represent the response from the NASA API
interface NasaApiResponse {
  collection: {
    items: {
      href: string;
      data: {
        description: string;
        title: string;
        nasa_id: string;
      };
      links: { href: string; rel: string; }[];
    }[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  // Define private properties to hold the base URL, API key, and image search URL
  private baseUrl = 'https://api.nasa.gov/';
  private apiKey = 'M7hwsYPXLXbFLox5Nz15XHwdoS22SxphH9eZfI1m';
  private imagesUrl = 'https://images-api.nasa.gov/search';

  constructor(private http: HttpClient) {}

  // Get the astronomy picture of the day
  public getAstronomyPicture(): Observable<any> {
    const url = `${this.baseUrl}planetary/apod?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  // Get the latest photos from a Mars rover
  public getLatestMarsRoverPhotos(roverName: string): Observable<any> {
    const url = `${this.baseUrl}mars-photos/api/v1/rovers/${roverName}/latest_photos?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  // Search for images using the NASA API
  public searchImages(query: string): Observable<NasaApiResponse> {
    const url = `${this.imagesUrl}?q=${query}&media_type=image`;
    return this.http.get<NasaApiResponse>(url);
  }
}