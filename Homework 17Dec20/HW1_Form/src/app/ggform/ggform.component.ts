import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ggform',
  templateUrl: './ggform.component.html',
  styleUrls: ['./ggform.component.css']
})
export class GgformComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      Name: ['',[Validators.required]],
      Email: ['', [Validators.email,Validators.required]],
      Postal: ['',[Validators.required]],
      Comments: ['']
    })
  }

  ngOnInit(): void {
  }

  onClick(): void {
    alert("Name: "+this.form.value.Name+"\nEmail: "+this.form.value.Email+"\nPostal Address: "+this.form.value.Postal+"\nComments: "+this.form.value.Comments)
  }

}
