import { Component } from '@angular/core';
import { NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent } from 'ng-zorro-antd/form';
import { NzColDirective } from 'ng-zorro-antd/grid';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { ApiService } from '../../services/api.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Validators as MyValidators } from '@angular/forms';

@Component({
  selector: 'app-criaturas-form',
  standalone: true,
  imports: [
    NzFormItemComponent,
    NzFormDirective,
    NzFormLabelComponent,
    NzFormControlComponent,
    NzColDirective,
    ReactiveFormsModule,
    NzInputDirective,
    NzButtonComponent
  ],
  templateUrl: './criaturas-form.component.html',
  styleUrls: ['./criaturas-form.component.css']
})
export class CriaturasFormComponent {
  form: FormGroup<{
    name: FormControl<string>;
    description: FormControl<string>;
    lastSee: FormControl<string>;
    countLastSee: FormControl<number>;
    extinct: FormControl<boolean>;
  }>;

  constructor(
    private fb: NonNullableFormBuilder,
    private apiService: ApiService,
    private notification: NzNotificationService
  ) {
    const { required, min } = MyValidators;
    this.form = this.fb.group({
      name: ['', [required]],
      description: ['', [required]],
      lastSee: ['', [required]],
      countLastSee: [0, [required, min(0)]],
      extinct: [false]
    });
  }

  submitForm(): void {
    if (this.form.valid) {
      console.log('submit', this.form.value);
      this.apiService.createCriatura(this.form.value).subscribe(() => {
        this.createNotification('success', `${this.form.value.name}`, "Data has been submitted successfully!");
        this.form.reset();
      });
    } else {
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  createNotification(type: string, title: string, message: string): void {
    this.notification.create(type, title, message);
  }
}
