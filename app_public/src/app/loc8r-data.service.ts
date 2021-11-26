import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location, Review } from './location';

@Injectable({
  providedIn: 'root'
})
export class Loc8rDataService {

  constructor(private http: HttpClient) {}

  private apiBaseUrl = 'https://findlocation97.herokuapp.com/api';

  public getLocations(lat: number, lng: number): Promise<Location[]> {
  //const lng: number = 127.26939808664095;
  //const lat: number = 37.01093243702107;
  const maxDistance: number = 200000;
  const url: string = `${this.apiBaseUrl}/locations?lng=${lng}&lat=${lat}&maxDistance=${maxDistance}`;
  return this.http
    .get(url)
    .toPromise()
    .then((response) => response as Location[])
    .catch(this.handlerError);
  }

  public getLocationById(locationId: any): Promise<Location> {
    const url: string = `${this.apiBaseUrl}/locations/${locationId}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Location)
      .catch(this.handlerError);
  }

  public addReviewByLocationId(locationId: string, formData: Review): Promise<Review> {
    const url: string = `${this.apiBaseUrl}/locations/${locationId}/reviews`;
    return this.http
      .post(url, formData)
      .toPromise()
      .then((Response) => Response as any)
      .catch(this.handlerError);
  }

  private handlerError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}