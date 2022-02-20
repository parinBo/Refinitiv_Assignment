import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../chapter.service';

@Component({
  selector: 'app-chapter2',
  templateUrl: './chapter2.component.html',
  styleUrls: ['./chapter2.component.scss']
})
export class Chapter2Component implements OnInit {
  data:any[] = []
  originalData = []
  constructor(private ser:ChapterService) { }

  async ngOnInit(): Promise<void> {
    let res = await this.ser.getData().toPromise()
    this.originalData = res.categories
    this.data = this.originalData
  }
  dataInput(e:any){
    let {value} = e.target
    if(value){
      this.data = this.data.filter((data:string)=>data.startsWith(value))
    }else{
      this.data = this.originalData
    }
    console.log(this.data.length)
  }
}
