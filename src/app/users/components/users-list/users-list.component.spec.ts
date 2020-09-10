import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListComponent } from './users-list.component';
import { UsersService } from '../../services/users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Users } from '../../models/users.models';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let userService: UsersService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersListComponent],
      imports: [HttpClientTestingModule],
      providers: [UsersService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call getUsers method from service and return list of users', () => {
    const mockUsers: Users = {
      list: {
        pagination: {
          count: 4,
          hasMoreItems: false,
          totalItems: 4,
          skipCount: 0,
          maxItems: 100,
        },
        entries: [
          {
            entry: {
              lastName: 'Beecher',
              userStatus:
                'Helping to design the look and feel of the new web site',
              jobTitle: 'Graphic Designer',
              statusUpdatedAt: '2011-02-15T20:20:13.432+0000',
              mobile: '0112211001100',
              emailNotificationsEnabled: true,
              description:
                'Alice is a demo user for the sample Alfresco Team site.',
              telephone: '0112211001100',
              enabled: false,
              firstName: 'Alice',
              skypeId: 'abeecher',
              avatarId: '198500fc-1e99-4f5f-8926-248cea433366',
              location: 'Tilbury, UK',
              company: {
                organization: 'Moresby, Garland and Wedge',
                address1: '200 Butterwick Street',
                address2: 'Tilbury',
                address3: 'UK',
                postcode: 'ALF1 SAM1',
              },
              id: 'abeecher',
              email: 'abeecher@example.com',
            },
          },
          {
            entry: {
              firstName: 'Administrator',
              emailNotificationsEnabled: true,
              company: {},
              id: 'admin',
              enabled: true,
              email: 'admin@alfresco.com',
            },
          },
          {
            entry: {
              firstName: 'Guest',
              emailNotificationsEnabled: true,
              company: {},
              id: 'guest',
              enabled: false,
            },
          },
          {
            entry: {
              lastName: 'Jackson',
              userStatus: 'Working on a new web design for the corporate site',
              jobTitle: 'Web Site Manager',
              statusUpdatedAt: '2011-02-15T20:13:09.649+0000',
              mobile: '012211331100',
              emailNotificationsEnabled: true,
              description:
                'Mike is a demo user for the sample Alfresco Team site.',
              telephone: '012211331100',
              enabled: false,
              firstName: 'Mike',
              skypeId: 'mjackson',
              avatarId: '3fbde500-298b-4e80-ae50-e65a5cbc2c4d',
              location: 'Threepwood, UK',
              company: {
                organization: 'Green Energy',
                address1: '100 Cavendish Street',
                address2: 'Threepwood',
                address3: 'UK',
                postcode: 'ALF1 SAM1',
              },
              id: 'mjackson',
              email: 'mjackson@example.com',
            },
          },
        ],
      },
    };
    spyOn(userService, 'getUsers').and.returnValue(of(mockUsers));
    component.getUserList();
    expect(userService.getUsers).toHaveBeenCalledWith();
    expect(component.userList.length).toEqual(4);
  });
});
