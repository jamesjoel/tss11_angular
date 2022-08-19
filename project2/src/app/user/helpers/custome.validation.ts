import {  FormGroup } from '@angular/forms';

export function checkPass(){
    return function(frm : FormGroup){
        let a = frm.controls['password'];
        let b = frm.controls['re_password'];

        if(a.value != b.value){
            b.setErrors({ rePassErr : true });
        }
    }
}

export function checkNum(){
    return function(frm:FormGroup){
        let a = frm.controls['contact'];

        if( isNaN(a.value) == true ){ // is not a number
            a.setErrors({ numErr : true })
        }
    }
}