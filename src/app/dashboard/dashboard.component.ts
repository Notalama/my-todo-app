import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { concatMap, delay, interval, mergeMap, Observable, of, range, ReplaySubject, share, shareReplay, Subject, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    name: new FormControl('1234')
  });
  name = '1234';
  nameObj = { name: '5678', age: 25 };
  ngOnInit(): void {
    of(1, 2, 3, 66)
      .pipe(
        concatMap(val => of(`Processed ${val}`).pipe(delay(1000)))
      )
      .subscribe(console.log);
    of(1, 2, 3, 66)
      .pipe(
        switchMap(val => of(`switchMap Processed ${val}`).pipe(delay(1000)))
      )
      .subscribe(console.log);
    of(1, 2, 3, 66)
      .pipe(
        mergeMap(val => of(`mergeMap Processed ${val}`).pipe(delay(1000)))
      )
      .subscribe(console.log);
    console.log('DashboardComponent');
    // [1, 2, 3].forEach((i) => {
    //   console.log(i);
    // });

    // const subject = new ReplaySubject(3); // buffer 3 values for new subscribers

    // subject.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`),
    // });

    // subject.next(1);
    // subject.next(2);
    // subject.next(3);
    // subject.next(4);

    // subject.subscribe({
    //   next: (v) => console.log(`observerB: ${v}`),
    // });

    // subject.next(5);
  }

  // Positive scenario
  updateName(): void {
    this.name = 'Updated Name';
  }

  // Negative scenario
  updateFormValue(): void {
    this.nameObj = { ...this.nameObj, age: Math.random() };
  }
  mutateUser() {
    this.nameObj.age++; // Mutate the existing object (will NOT trigger change detection)
  }
}
