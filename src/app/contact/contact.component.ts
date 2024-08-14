import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm= new FormGroup({
    name :new FormControl('',[Validators.required]),
    email :new FormControl('',[Validators.required]),
    tel :new FormControl(''),
    message :new FormControl('')
  })
 
 

  onSubmit(){
  console.log(this.contactForm.value.name);
  
}

updateContactForm(){
  this.contactForm.patchValue({
    name:"aristide",
    email : "naza@yooo"
  })
}

updateContactForm2(){
  this.contactForm.setValue({
    name:"naza",
    email:"azerty@jfhf",
    tel:"naza",
    message:"aerrdfdff"
  })
}

}
