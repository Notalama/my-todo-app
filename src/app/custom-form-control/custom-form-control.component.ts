import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-form-control',
  templateUrl: './custom-form-control.component.html',
  styleUrl: './custom-form-control.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomFormControlComponent),
    multi: true
  }]
})
export class CustomFormControlComponent implements ControlValueAccessor {
  value: string = '';
  onChange: (value: string) => void = () => {
    console.log('17')
  };

  constructor() {}

  registerOnChange(fn: any): void {
    // console.log(fn, 'registerOnChange')
    this.onChange = fn;
  }

  writeValue(value: any): void {
    // console.log('writeValue', value)
    this.value = value;
  }
  
  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }
  inputChange(e: any): void {
    console.log('inputChange', e.target.value)
    this.value = e.target.value;
    this.onChange(this.value);
  }

}
