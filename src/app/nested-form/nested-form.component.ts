import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css'],
})
export class NestedFormComponent {
  nestedFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(18),
      Validators.max(65),
    ]),
    occupations: new FormArray([new FormControl('Programmer')]),
  });

  occupationNameFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  createOccupation() {
    let name = this.occupationNameFormGroup.value.name;

    if (!name || name.length == 0) {
      return;
    }

    this.nestedFormGroup.controls.occupations.push(
      new FormControl(name, [Validators.required])
    );

    this.occupationNameFormGroup.reset();
  }

  removeOccupation(index: number) {
    this.nestedFormGroup.controls.occupations.removeAt(index);
  }

  editOccupation(occupationIndex: number, newOccupation: string) {
    let occupationRef =
      this.nestedFormGroup.controls.occupations.controls[occupationIndex];

    if (!occupationRef || newOccupation.length == 0) {
      return;
    }

    occupationRef.setValue(newOccupation);
  }
}
