import { Component, EventEmitter, Output } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input-customized',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './input-customized.component.html',
  styleUrl: './input-customized.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputCustomizedComponent,
    },
  ],
})
export class InputCustomizedComponent implements ControlValueAccessor {
  yearCtrl = new FormControl();
  monthCtrl = new FormControl();
  dayContr = new FormControl();
  onChange: unknown;
  onTouched: unknown;

  writeValue(obj: any): void {
    // this.yearCtrl.value(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}

  @Output() whenValueChanges = new EventEmitter<string>();

  valuechange(event: any) {
    const year = this.yearCtrl.value;
    const month = this.monthCtrl.value;
    const day = this.dayContr.value;

    const birthdaty = `${year}-${month}-${day}`;

    if (typeof this.onChange == 'function') {
      this.onChange(birthdaty);
    }
    if (typeof this.onTouched == 'function') {
      this.onTouched();
    }
    this.whenValueChanges.emit(birthdaty);
  }
}
