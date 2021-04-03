import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddressData } from "./../model/addressData";
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  url = "http://localhost:8080"
  constructor(private httpClient: HttpClient) { }

  public getAllAddress(): Observable<AddressData[]> {
    return this.httpClient.get<AddressData[]>(this.url + '/getListOfAddress');
  }

  public getAddressByID(id: Number): Observable<any> {
    return this.httpClient.get<any>(this.url + '/getAddress/' + id);
  }

  public addAddress(address: AddressData): Observable<any> {
    return this.httpClient.post<any>(this.url + '/addAdress', address);
  }

  public updateAddress(address: AddressData): Observable<any> {
    return this.httpClient.put<any>(this.url + '/updateAddress', address);
  }

  public deleteAddress(id: Number): Observable<any> {
    return this.httpClient.delete<any>(this.url + '/deleteAddress' + id);
  }

}
