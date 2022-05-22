import { Component, OnInit } from '@angular/core';
import { AttendeeService } from '../services/attendee.service';

@Component({
  selector: 'app-attendees',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.css']
})
export class AttendeesComponent implements OnInit {
  public attendees: any[] = []
  constructor(private attendeeService : AttendeeService) { }

  ngOnInit(): void {
    this.attendees = this.attendeeService.getAllAttendees();
  }
  // getAttendee(){
  //  this.attendees = this.attendeeService.getAllAttendees();
  // }
}
