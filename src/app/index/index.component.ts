import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit():void{

    $("body").css("color","#000");
  //  debugger;

    var mySwiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      autoplay: 1500,//可选选项，自动滑动
      autoplayDisableOnInteraction:false,//用户点击页码之后不停止播放
      loop:true,
    });


  }

}
