import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get<any>('https://api.publicapis.org/categories')
  }

}
