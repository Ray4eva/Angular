import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAttendee } from '../Models/IAttendeee';
import { IProduct } from '../Models/products';




@Injectable({
  providedIn: 'root'
})
export class AttendeeService {
  public allAttendee :  IAttendee[] = [];

  constructor(private http : HttpClient) { }


  private _url: string = "https://reqres.in/api/products";
  getAllAttendees() {
    return [
         {
           name : "Jide",
           country : "Nigeria",
           city : "Lagos",
          maritalStatus: "Married",
           hobbies: "Tennis"
         }
       ]  
  }
  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this._url)
  }
}







