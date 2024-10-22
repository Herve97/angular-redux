import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  // standalone: true
})
export class FormComponent implements OnInit {

  public booksForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.booksForm = this.fb.group({
      id: [''],
      name: [''],
      publisher: [''],
      author: [''],
    })
  }

  onSubmit(): void{

  }

}
