import { AbstractControl, ValidationErrors } from '@angular/forms';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';

export class Profilevalidator {
    static cannotcontainspace(control: AbstractControl): ValidationErrors | null {
         if((control.value as string).indexOf(" ") >= 0)
          return { cannotcontainspace: true }
        return null;
    }

    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if (control.value =="sakthi")
                    resolve ({shouldBeUnique: true });
                else
                    reject(null);
                }, 2000)
        })

        return null;
    }
}
