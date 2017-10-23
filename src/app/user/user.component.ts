import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor() { }

  ngOnInit():void{

    var swiperUser = new Swiper('.swiper-container-ueser', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
     // autoplay: 1500,//可选选项，自动滑动
      direction: 'vertical',
      loop:true,
    });
    swiperUser.height="0px";

  }

}
