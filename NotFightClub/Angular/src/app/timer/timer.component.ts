import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  timer:number = setInterval(() => {
    let currentTime = new Date().getTime();
    let targetTime = new Date("Oct 1, 2021 09:00:00").getTime();
    let timeDifference = targetTime - currentTime;

    this.days = Math.floor(timeDifference / 86400000);
    this.hours = Math.floor((timeDifference % 86400000) / 3600000);
    this.minutes = Math.floor((timeDifference % 3600000) / 60000);
    this.seconds = Math.floor((timeDifference % 60000) / 1000);

    if (timeDifference <= 0) {
      clearInterval(this.timer);
    }
  })
}
