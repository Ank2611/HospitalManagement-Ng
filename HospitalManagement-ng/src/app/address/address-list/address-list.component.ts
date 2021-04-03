import { Component, OnInit } from '@angular/core';
import { AddressData } from "../../model/addressData";
import { AddressService } from "../../service/address.service";

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  address: AddressData = new AddressData();
  addressList: AddressData[] = [];

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    console.log("sunt aici");
   this.loadAddress();
   console.log("sunt aici 2");
  }

  loadAddress(): void{
    this.addressService.getAllAddress().subscribe(receivedList => {
      this.addressList = receivedList;});
  }

}
