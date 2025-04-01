import { AbstractControl } from "@angular/forms";

export function googleMail(control:AbstractControl){
    if(control.value.include('@google.com')){
        return null
    }
    else{
        return {'GoogleMail':'please use the google mail only'}
    }
}