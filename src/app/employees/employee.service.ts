import { Injectable } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/throw';
import { retry, catchError} from 'rxjs/operators';
// import { ErrorObservable } from 'rxjs/observable/ErrorObservable'
@Injectable()
export class EmployeeService{
    constructor(private httpClient : HttpClient){}
    private listEmployees : Employee[];
    
   
    getEmployee(): Observable <Employee[]> {
        // return this.listEmployees;
      return this.httpClient.get<Employee[]>('http://localhost:1613/api/Values')
      .pipe(retry(1),catchError(this.handleError));
    }
    // http://localhost:3000/employees
    getEmployeebyID(id : number): Employee {   
         this.httpClient.get<Employee[]>('http://localhost:1613/api/Values')
        .subscribe((data:Employee[]) => { 
             this.listEmployees = data;
         });
        // this.listEmployees.push(result);
        return this.listEmployees.find(e=>e.id === id);
    }
    validateUser(userName : string, password:string): Observable<any>{
        var userData = "username=" + userName + "&password=" + password + "&grant_type=password";
        var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded'});
        return this.httpClient.post<any>('http://localhost:1613'+'/token',userData,{headers: reqHeader})
    }
    save(employee: Employee, id : number) :Observable<any> {
        if(id==0){
        return this.httpClient.post<any>('http://localhost:1613/api'+'/Values', employee,{
            headers: new HttpHeaders({
            'Content-Type' : 'application/json'})}).pipe(retry(1),catchError(this.handleError));
        }
        else{ 
            return this.httpClient.put<any>('http://localhost:1613/api/Values/'+id, employee,{
            headers: new HttpHeaders({
            'Content-Type' : 'application/json'})}).pipe(retry(1),catchError(this.handleError));
        }
  // .pipe(retry(1),catchError(this.handleError));
        // if(employee.id==null){
        //     const maxId = this.listEmployees.reduce(function(e1,e2){
        //             return (e1.id>e2.id)?e1:e2;
        //     }).id;
        //     employee.id = maxId +1;
        // this.listEmployees.push(employee);
        // } else{
        //    const foundIndex = this.listEmployees.findIndex(e=>e.id===employee.id)
        //    this.listEmployees[foundIndex] = employee;
        // }

    }
    deleteEmplyee(id : number) : Observable<any>{
        return this.httpClient.delete<any>('http://localhost:1613/api/Values/'+id)
        .pipe(retry(1),catchError(this.handleError));
    }
    handleError(errorResponse : HttpErrorResponse){
            if(errorResponse.error instanceof ErrorEvent)
            {
                console.error("client side error :", errorResponse.error.message);
            } else{
                console.error("server side error: ",  errorResponse);
            }
            // window.alert(errorResponse.error.message);
            return throwError(errorResponse);
        }
}