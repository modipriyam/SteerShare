import { Booking } from './../models/booking.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }


  public add(booking: Booking): Observable<Booking>{
    const bookings$ = this.http.post<Booking>('http://localhost:3000/rides', booking);
    return bookings$;
  }

  public view(id: string): Observable<Booking>{
    const rides$ = this.http.get<Booking>('http://localhost:3000/rides/'+id);
    return rides$;
  }



}
