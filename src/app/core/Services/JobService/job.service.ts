import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../../Model/iuser';


@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseUrl = 'https://localhost:7071/api/Jobs';

  constructor(
    protected _http: HttpClient,

  ) { }


  getJobs() {
    return this._http.get<any[]>(`${this.baseUrl}`);
  }

  getJobDetails(id: number) {
    return this._http.get<any>(`${this.baseUrl}/${id}`);
  }

  applyForJob(application: any) {
    return this._http.post(`${this.baseUrl}`, application);
  }
  addJob(jobData: any): Observable<any> {
    return this._http.post(`${this.baseUrl}`, jobData);
  }
}
