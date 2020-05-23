import { Injectable } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  dataurl='service/hero ';

  constructor(private apiservice:ApiServiceService) { }

deleteHero(id){

  const url = `${this.dataurl}/${id}`;
  return this.apiservice.delete(url);

}
}
