import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  // transform(value:number): string {
  //   let differenceInSeconds = value/1000;

  //   // calculating time in a year
  //   let interval = differenceInSeconds/31536000;
  //   if (interval>2) {
  //     return `${Math.floor(interval)} years ago`
    
  //   }

  //    interval = differenceInSeconds/31536000;
  //   if (interval>1) {
  //     return `${Math.floor(interval)} year ago`
  //   }

  //   // calculating time in a month
  //    interval = differenceInSeconds/2592000;
  //   if (interval>2) {
  //     return `${Math.floor(interval)} months ago`
  //   }

  //    interval = differenceInSeconds/2592000;
  //   if (interval>1) {
  //     return `${Math.floor(interval)} month ago`
  //   }

  //   // calculating time in a day
  //    interval = differenceInSeconds/86400;
  //   if (interval>2) {
  //     return `${Math.floor(interval)} days ago`
  //   }

  //    interval = differenceInSeconds/86400;
  //   if (interval>1) {
  //     return `${Math.floor(interval)} day ago`
  //   }

  //   // calculating time in an hour
  //    interval = differenceInSeconds/3600;
  //   if (interval>2) {
  //     return `${Math.floor(interval)} hours ago`
  //   }

  //    interval = differenceInSeconds/3600;
  //   if (interval>1) {
  //     return `${Math.floor(interval)} hour ago`
  //   }

  //   // calculating time in minutes
  //    interval = differenceInSeconds/60;
  //   if (interval>2) {
  //     return `${Math.floor(interval)} minutes ago`
  //   }

  //    interval = differenceInSeconds/60;
  //   if (interval>1) {
  //     return `${Math.floor(interval)} minute ago`
  //   }
  //     return 'Just Now'
  //   // console.log(differenceInSeconds)
  // }


  transform(value: any, ...args: any[]): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29) return 'Just now';
      const intervals = [
        { name: 'year', time: 31536000 },
        { name: 'month', time: 2592000 },
        { name: 'week', time: 604800 },
        { name: 'day', time: 86400 },
        { name: 'hour', time: 3600 },
        { name: 'minute', time: 60 },
        { name: 'second', time: 1 },
      ];

      let counter;
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i].time);
        if (counter > 0)
          if (counter === 1) {
            return counter + ' ' + intervals[i].name + ' ago';
          } else {
            return counter + ' ' + intervals[i].name + 's ago';
          }
      }
    }
    return value;
  }

}
