import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { IAttendee } from '../Models/IAttendeee';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   public registerForm: any;
   public allAttendee : IAttendee[] = [];

  constructor(private fb : FormBuilder, private route : Router) { }

  ngOnInit(): void {
    this.initControl();
  }
  initControl(){
    this.registerForm = this.fb.group({
    name: [""],
    country: [""],
    city: [""],
    maritalStatus: [""],
    hobbies: [""]
    })

  }
  save(registerForm: IAttendee){
    this.allAttendee.push(registerForm) 
    this.reRoute()
   
    
  }
  reRoute(){
    this.route.navigate(['/attendees', this.allAttendee])
  }
}

