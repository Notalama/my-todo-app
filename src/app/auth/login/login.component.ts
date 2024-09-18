import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, forwardRef, OnChanges, OnInit } from '@angular/core';
import { interval, tap, map, take, share } from 'rxjs';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LoginComponent),
    multi: true
  }]
})
export class LoginComponent implements OnInit {
  
  testData = {
    a: 1
  };

  
  constructor(private ref: ChangeDetectorRef) {
    
  }
  ngOnInit(): void {

  }
  onTouched: any = () => {};

  increment(): void {
    this.testData.a = this.testData.a + 1;
  }
}
