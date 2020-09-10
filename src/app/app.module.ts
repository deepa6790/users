import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users/components/users-list/users-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

const modules: any[] = [MatCardModule, MatChipsModule, MatIconModule];

@NgModule({
  declarations: [AppComponent, UsersListComponent],
  imports: [BrowserModule, HttpClientModule, NoopAnimationsModule, modules],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
  exports: [modules],
})
export class AppModule {}
