import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';

//import { ServerURLInterceptor } from './serve.url.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { UserComponent } from './user/user.component';
import { NoticeComponent } from './notice/notice.component';
import { NoticeService} from './notice/notice.service';

const routers:Routes=[
  { path: 'index/index', component: IndexComponent },
  {path:'user/user',component:UserComponent},
  {path:'notice/notice',component:NoticeComponent},
  {path: '', redirectTo: '/index/index', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UserComponent,
    NoticeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routers)//{enableTracing:true}可放在forRoot里用于输出路由进程，查看路由路径识别
  ],
  providers: [
    NoticeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
