import { Injectable } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  dataurl='service/hero ';
  example;
  errormsg="";

  constructor(private apiservice:ApiServiceService) { }

deleteHero(id){

  const url = `${this.dataurl}/${id}`;
  return this.apiservice.getData().subscribe(
    data => this.example=data,
    error=>this.errormsg=error
  );

}
}
