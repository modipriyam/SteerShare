import { Location } from './../rides/locations.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RideService {

  constructor(private http: HttpClient) { }


  public list(): Observable<Array<Location>> {
    const locations$ = this.http.get<Location[]>('assets/locations.json');
    return locations$;
  }
}
