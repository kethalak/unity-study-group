import {FormControl, FormGroup} from '@angular/forms';

export class PasswordValidators {

    static complexPassword(formControl : FormControl){
        let minLength = 5;
        if(formControl.value == "")
            return null;

        if(formControl.value && formControl.value.length < minLength){
            return { complexPassword : {
                minLength : minLength, 
                currentLength : formControl.value.length 
                } 
            }
        }
        return null;
    }

    static passwordsShouldMatch(formGroup : FormGroup){
        var password = formGroup.get('password').value;   
        var confirmPassword = formGroup.get('confirmPassword').value;
        if(password == '' || confirmPassword == '')
            return null
        
        if(password != confirmPassword)
            return {passwordsShouldMatch : true}
    }
}