import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  showPorcentage: boolean = false
  showSugestions: boolean = false
  classesForm!: FormGroup
  constructor(
    private formBuilder: FormBuilder
  ) {}


  ngOnInit(): void {
    this.classesForm = this.formBuilder.group({
      class: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required])
    })
  }

  filterClassChange() {
    if (this.classesForm.controls['class'].getRawValue() !== 'Selecione a turma') {
      this.showPorcentage = true
    } else {
      this.showPorcentage = false
    }
  }

  filterSubjectChange() {

  }

  filterContentChange() {
    if (this.classesForm.controls['content'].getRawValue() !== 'Alfabeto' && this.classesForm.controls['content'].getRawValue() !== 'Sílabas') {
      this.showSugestions = false
    } else {
      this.showSugestions = true
    }
  }
}
