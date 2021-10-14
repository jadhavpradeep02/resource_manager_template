import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public static BaseUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getProjectData() {
  }

  postProjectdata(data: any){
  }

  deleteProjectdata(data: any){
  }
}
