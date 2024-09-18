import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrl: './child-one.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildOneComponent implements OnInit {
  name = '1234';
  nameObj = { name: '5678', age: 25 };
  @Input() user: { name: string, age: number };
  
  constructor(private cdRef: ChangeDetectorRef) {}

  updateUser() {
    this.user = { ...this.user, age: this.user.age + 1 }; // Create a new object (immutable update)
    // this.cdRef.detectChanges(); // Uncomment this if you need to force a change detection cycle
  }

  // mutateUser() {
  //   this.user.age = this.user.age + 1; // Mutate the existing object (will NOT trigger change detection)
  // }
  ngOnInit(): void {
    console.log('ChildOneComponent');
  }

  markForCheck(): void {
    this.cdRef.markForCheck();
  }
  
  // Positive scenario
  updateName(): void {
    this.name = 'Updated Name';
  }

  // Negative scenario
  updateFormValue(): void {
    this.nameObj.age = Math.random();
  }
}
