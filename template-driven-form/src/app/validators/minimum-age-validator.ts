import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class MinimumAgeValidator{
    static minimumAge(minimumAge: number): ValidatorFn{
        return (control: AbstractControl): ValidationErrors | null => {
            if(!control.value){
                return null;
            }

            const currentDate = new Date();
            const inputDate = new Date(control.value);

            // Calculate the age subtracting the input date from the current date
            let age = currentDate.getFullYear() - inputDate.getFullYear();
            const monthDiff = currentDate.getMonth() - inputDate.getMonth();
            if(monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < inputDate.getDate())){
                age--;
            }

            return age >= minimumAge ? null : {minimumAge: true}
        }
    }
}