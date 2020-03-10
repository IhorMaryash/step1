import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../user.interface';

@Pipe({
  name: 'sortdata'
})
export class SortdataPipe implements PipeTransform {

  transform(arrUsers: Array<IUser>, key: string = "firstName", sort: boolean, searchData: string): unknown {
    if (sort) {
      arrUsers = arrUsers.sort(function (a, b) {
        if (a[key].toLowerCase() < b[key].toLowerCase()) {
          return -1
        }
        else if (a[key].toLowerCase() > b[key].toLowerCase()) {
          return 1
        }
        else {
          return 0
        }
      })
    }
    else {
      arrUsers = arrUsers.sort(function (a, b) {
        if (a[key].toLowerCase() < b[key].toLowerCase()) {
          return -1
        }
        else if (a[key].toLowerCase() > b[key].toLowerCase()) {
          return 1
        }
        else {
          return 0
        }
      })
    }
    if (!searchData) return arrUsers
    if (arrUsers.filter(value => value.firstName.toLocaleLowerCase().includes(searchData.toLocaleLowerCase())).length > 0) {
      return arrUsers.filter(value => value.firstName.toLocaleLowerCase().includes(searchData.toLocaleLowerCase()))
    }
    else if (arrUsers.filter(value => value.lastName.toLocaleLowerCase().includes(searchData.toLocaleLowerCase())).length > 0) {
      return arrUsers.filter(value => value.lastName.toLocaleLowerCase().includes(searchData.toLocaleLowerCase()))
    }
    else {
      return arrUsers.filter(value => value.phoneNumber.includes(searchData))
    }
  }
}
