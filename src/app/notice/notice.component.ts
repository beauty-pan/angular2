import { Component, OnInit } from '@angular/core';
import {split} from 'ts-node/dist';
import {join} from 'path';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.sass']
})
export class NoticeComponent implements OnInit {
  fruitsList = ['apple', 'orange', 'pear', 'banana'];
  title='这是消息';
  userData={
    name:"",
    phone:"",
    identity:""
  }
   arr1=['1','2','3'];
   arr2=['4','5'];



  constructor() {
    console.log('www');
  }
  ngOnInit() {
    console.log(this.userData.name);
    console.log('123');
    this.noticeData();
    this.arrs();

  }
  noticeData(){
    console.log('读取数据');
    $(".notice-list").text('这是读取的信息');
  }
  readyUser(){
    console.log(this.userData);
  }
  arrs(){


    var arr3=split(this.arr1,',');
    var arr4=split(this.arr2,',');
    var arr5=join(arr3,arr4);

  }

}

