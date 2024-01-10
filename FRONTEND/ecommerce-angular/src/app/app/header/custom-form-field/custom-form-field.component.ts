import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, ElementRef, HostBinding, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgControl, AbstractControlDirective, FormControl, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Observable, Subject } from 'rxjs';
//interface
export interface FormFieldValue {
  query: string;
  scope: string;
}

@Component({
  selector: 'app-custom-form-field',
  templateUrl: './custom-form-field.component.html',
  styleUrls: ['./custom-form-field.component.scss'],
  providers: [{
    provide: MatFormFieldControl,
    useExisting: CustomFormFieldComponent,
    },
  ],
})
export class CustomFormFieldComponent implements OnInit, MatFormFieldControl<FormFieldValue> {  
  static nextId=0;
  @ViewChild(MatInput, { read: ElementRef, static: true })
  input: ElementRef;
  @Input()
  set value(value: FormFieldValue) {
    this._value = value;
    this.stateChanges.next();
  }
  get value() {
    return this._value;
  }
  private _value: FormFieldValue;

  stateChanges = new Subject<void>();// stateChanges: Observable<void> = new Subject();
  
  @HostBinding() id=`custom-form-field-id-${CustomFormFieldComponent.nextId++}`;

  @Input()
  set placeholder(value: string) {
    this._placeholder=value;
    this.stateChanges.next();
  }
  get placeholder() {
    return this._placeholder;
  }
  private _placeholder: string;

  ngControl: NgControl | AbstractControlDirective = null;

 
  focused: boolean = true;
  empty: boolean;
  shouldLabelFloat: boolean = true;
  required: boolean;
  disabled: boolean;
  errorState: boolean;
  controlType?: string;
  autofilled?: boolean;
  userAriaDescribedBy?: string;

  constructor(private focusMonitor: FocusMonitor){}
  setDescribedByIds(ids: string[]): void {
    // throw new Error('Method not implemented.');
  }
  onContainerClick(event: MouseEvent): void {
    // throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.focusMonitor.monitor(this.input).subscribe((focused) => {
      this.focused = !!focused;
      this.stateChanges.next();
    });
  }
}
