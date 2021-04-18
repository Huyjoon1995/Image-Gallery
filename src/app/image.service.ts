import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Image } from './models/image.model';
import { catchError, map } from 'rxjs/operators';
import { api, download_url } from './constant.url'
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private _httpClient: HttpClient) { }

  /**
   * Fetch a list of image from the public API end point
   * @returns 
   */
  getListOfImages(): Observable<Image[]> {
    return this._httpClient.get<Image[]>(api).pipe(
      map((res: Image[]) => {
        for(let i = 0; i < res.length; i++) {
          res[i].download_url = download_url + '/' + res[i].id + '/' + res[i].width + '/' + res[i].height;
        }
        res = res.filter(item => {
          return item.author === "Alejandro Escamilla";
        })
        return res;
      }
      ), catchError(this._errorHandler));
  }

  /**
   * Error handling function when api call fails
   * @param error : A response that represents an error or failure, either from a non-successful HTTP status
   * @returns 
   */
  private _errorHandler(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = "An error occurred " + error.error.message;
    } else {
      errorMessage = `Backend returned code ${error.status}, ` + `body was: ${error.error}`;
    }
    return throwError(errorMessage);
  }
}
