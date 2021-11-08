import { Component, OnInit } from '@angular/core';

export class Location {
  _id: string;
  name: string;
  distance: number;
  address: string;
  rating: number;
  facilities: string[];
}

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor() { }

  name = 'MegaCoffee'

  locations: Location[] = [{
    _id: '616ce0d1c8c24f4eb10dd37c',
    name: 'MegaCoffee',
    distance: 2,
    address: '대천동 70-3번지 안성시 경기도 KR -2017250035 이종수-',
    rating: 3,
    facilities: ['Hot drinks', 'Premium wifi', 'Food']
  },
  {
    _id: '616cdd3dc98760f4b6d7b6cf',
    name: 'HondDaeStarBucks',
    distance: 102000,
    address: '서울특별시 마포구 서교동 362-1 -2017250035 이종수-',
    rating: 5,
    facilities: ['Hot drinks', 'Premium wifi', 'Food']
  }];

  ngOnInit(): void { }
}