import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter1',
  templateUrl: './chapter1.component.html',
  styleUrls: ['./chapter1.component.scss']
})
export class Chapter1Component implements OnInit {
  num:Number =0
  sel:any = '0'
  result:boolean = false
  list =[{a:'0',t:'isPrime'},{a:'1',t:'isFibonacci'}]
  constructor() { }

  ngOnInit(): void {
  }

  input(e:any){
    let {value} = e.target
    let m = Math.round(value)
    if(m<0){
      m = 1
    }
    this.num = m
    this.calculate()
  }
  isPrimeNumber(n:any) {
    for (var i = 2; i < n; i++) {
      if(n % i === 0) return false;
    }
    return n > 1;
  }
  isFabonacci(n:any) {
    if (n === 1 || n === 0) {
        return true;
    }
    let firstPrevNumber = n - 1;
    let secondPrevNumber = n - 2;
    return (firstPrevNumber + secondPrevNumber === n);
}

  select(e:any){
    this.calculate()
  }
  calculate(){
    if(parseInt(this.sel)){
      this.result = this.isFabonacci(this.num)
    }else{
      this.result = this.isPrimeNumber(this.num)
    }
  }



}
