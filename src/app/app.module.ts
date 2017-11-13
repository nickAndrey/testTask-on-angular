import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Ng2PaginationModule } from 'ng2-pagination';
import { UserComponent }  from './components/user.component';
import { UserDataComponent }  from './components/user-data/user-data.component';
import { SidebarComponent }  from './components/sidebar/sidebar.component';


@NgModule({
  imports:
  [
      BrowserModule,
      HttpModule,
      Ng2PaginationModule
   ],
  declarations:
  [
      UserComponent,
      UserDataComponent,
      SidebarComponent
   ],
  bootstrap:
  [
      UserComponent,
      SidebarComponent,
      UserDataComponent
   ]
})
export class AppModule { }
