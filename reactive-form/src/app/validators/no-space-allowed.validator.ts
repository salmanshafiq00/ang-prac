
import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Observable, catchError, delay, map, of, timer } from "rxjs";

// export function noSpaceAllowed(): ValidatorFn{
//   return (control: AbstractControl): ValidationErrors | null => {
//     if (control.value && control.value.indexOf(' ') !== -1) {
//       return { noSpaceAllowed: true }
//     }
//     return null;
//   }
// } 

export class CommonValidation{

   static noSpaceAllowed(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && control.value.indexOf(' ') !== -1) {
        return { noSpaceAllowed: true }
      }
      return null;
    }
  } 
}

export const usernameExist = (): AsyncValidatorFn => {
  return (control: AbstractControl): Observable<ValidationErrors | null> =>{
    return checkUsernameExist(control.value).pipe(
      map((isExist) => (isExist ? {usernameExists: true} : null)),
      catchError(() => of(null))
    );
  }
}

const checkUsernameExist = (username: string): Observable<boolean> => {

  // const http: HttpClient = inject(HttpClient);

  timer(5000);

  // const url = `https://localhost:5001/${username}`;

  // return http.get<boolean>(url);

  return of(usernameList.some(x => x.toLowerCase() === username.toLowerCase())).pipe(
    delay(5000)
  );
}

const usernameList = ['salfar1996', 'farsy2024', 'rafa2024', 'mushi2010']
