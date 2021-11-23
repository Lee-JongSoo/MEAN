import { Component, Input, OnInit } from '@angular/core';
import {Location} from "../home-list/home-list.component";

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  @Input() location: Location;

  public newReview = {
    author: '',
    rating: 5,
    reviewText: '',
  };

  public formVisible: boolean = false;

  public googleAPIKey: string = 'AIzaSyBhP6lqwz2EGGcLTsw1y_kym4l6LKDzPc4'

  constructor() { }

  ngOnInit(): void {
  }

}
