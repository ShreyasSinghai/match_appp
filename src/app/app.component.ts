import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'cricket-app';

  tabData: any;
  matchesData: any;
  public matches: any;
  Object: any;

  constructor(private DataService: DataService) {}

  ngOnInit(): void {
    //fetchiing data here
    this.DataService.fetchdata().subscribe((response) => {
      // console.log('FETCHING All Data == ', response.data);
      this.tabData = response.data.tabs;
      this.matchesData = response.data.matches;
      // console.log('FETCHING matchesData == ', this.matchesData); // Log matchesData here
      // console.log('FETCHING tabData == ', this.tabData);
    });
  }

  //working of the date type
  formatDate(dateString: string): string {
    const [day, month, year] = dateString.split('/');
    return `${day}/${month}/${year}`;
  }
}
