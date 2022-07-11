import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
  title = "Template Driven Forms";

  countryList: Country[] = [
    new Country("1", "India"),
    new Country("2", "Thailand"),
    new Country("3", "Germany")
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(contactForm:any){
    console.log(contactForm.value);
  }

}
export class Country{
  id:string;
  name:string;

  constructor(id:string, name:string){
    this.id = id;
    this.name = name;
  }
}
