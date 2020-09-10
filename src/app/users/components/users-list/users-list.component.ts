import { Component, OnInit } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import { Users } from '../../models/users.models';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  constructor(private userService: UsersService) {}

  userList: any;

  ngOnInit(): void {
    this.getUserList();
  }
  getUserList(): void {
    this.userService
      .getUsers()
      .pipe(pluck('list', 'entries'))
      .subscribe((data: Users) => {
        this.userList = data;
      });
  }
  remove(user: Users): void {
    const index = this.userList.indexOf(user);

    if (index >= 0) {
      this.userList.splice(index, 1);
    }
  }
}
