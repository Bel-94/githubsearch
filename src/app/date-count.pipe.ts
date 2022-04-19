import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value:number): string {
    let differenceInSeconds = value/1000;

    // calculating time in a year
    let interval = differenceInSeconds/31536000;
    if (interval>2) {
      return `${Math.floor(interval)} years ago`
    
    }

     interval = differenceInSeconds/31536000;
    if (interval>1) {
      return `${Math.floor(interval)} year ago`
    }

    // calculating time in a month
     interval = differenceInSeconds/2592000;
    if (interval>2) {
      return `${Math.floor(interval)} months ago`
    }

     interval = differenceInSeconds/2592000;
    if (interval>1) {
      return `${Math.floor(interval)} month ago`
    }

    // calculating time in a day
     interval = differenceInSeconds/86400;
    if (interval>2) {
      return `${Math.floor(interval)} days ago`
    }

     interval = differenceInSeconds/86400;
    if (interval>1) {
      return `${Math.floor(interval)} day ago`
    }

    // calculating time in an hour
     interval = differenceInSeconds/3600;
    if (interval>2) {
      return `${Math.floor(interval)} hours ago`
    }

     interval = differenceInSeconds/3600;
    if (interval>1) {
      return `${Math.floor(interval)} hour ago`
    }

    // calculating time in minutes
     interval = differenceInSeconds/60;
    if (interval>2) {
      return `${Math.floor(interval)} minutes ago`
    }

     interval = differenceInSeconds/60;
    if (interval>1) {
      return `${Math.floor(interval)} minute ago`
    }
      return 'Just Now'
    // console.log(differenceInSeconds)
  }

}
