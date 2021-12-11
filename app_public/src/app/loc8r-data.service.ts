import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location, Review } from './location';
import { User } from './user';
import { Authresponse } from './authresponse';
import { BROWSER_STORAGE } from './storage';

@Injectable({
  providedIn: 'root'
})
export class Loc8rDataService {

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}

  //private apiBaseUrl = 'http://localhost:3000/api';
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

  public addReviewByLocationId(
    locationId: string,
    formData: Review
  ): Promise<Review> {
    const url: string = `${this.apiBaseUrl}/locations/${locationId}/reviews`;
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.storage.getItem('loc8r-token')}`,
      }),
    };
    return this.http
      .post(url, formData, httpOptions)
      .toPromise()
      .then((Response) => Response as any)
      .catch(this.handlerError);
  }

  private handlerError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  public login(user: User): Promise<Authresponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<Authresponse> {
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<Authresponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then((response) => response as Authresponse)
      .catch(this.handlerError);
  }
}