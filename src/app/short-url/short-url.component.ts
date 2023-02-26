import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.scss']
})
export class ShortUrlComponent implements OnInit {

  longUrl!: string;
  shortUrl!: string

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  createShortUrl(){
    this.http.post<any>('https://magnificent-toad-drawers.cyclic.app/shortner',{longUrl:this.longUrl}).subscribe(res => {
      this.shortUrl = `https://magnificent-toad-drawers.cyclic.app/${res.shortUrl}`;
    })
  }


}
