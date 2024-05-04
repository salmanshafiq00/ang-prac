import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { AsyncValidatorFn, FormControl, ValidationErrors } from "@angular/forms";
import { Observable, catchError, map, of } from "rxjs";

export class UsernameExistValidator{

    http: HttpClient = inject(HttpClient);

    static ValidateUsernameExists(): AsyncValidatorFn{
        return (control: FormControl): Observable<ValidationErrors | null> => {
            const username = control.value;
            return this.checkUsernameExists(username).pipe(map((exists: boolean) => (exists ? {usernameExists: true} : null)),
        catchError(() => of(null)));
        }
    }

    // checkUsernameExists(username: string): Observable<boolean>{
    //     const url = `https://localhost:5001/${username}`;
    //     return this.http.get<boolean>(url);
    // }

    static checkUsernameExists(username: string): Observable<boolean>{
        return of(this.usernameList.includes(username))
    }

    static usernameList = ['salfar1996', 'farsy2024', 'rafa2024', 'mushi2010']
}