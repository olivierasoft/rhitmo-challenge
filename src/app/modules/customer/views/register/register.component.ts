import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { ICity } from 'src/app/core/interfaces/city.interface';
import { ICustomer } from 'src/app/core/interfaces/customer.interface';
import { IUf } from 'src/app/core/interfaces/uf.interface';
import { CustomerProvider } from 'src/app/core/providers/customer.provider';
import { IbgeProvider } from 'src/app/core/providers/ibge.provider';

interface RegisterFormGroup {
  id: FormControl<string | null>;
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  cpf: FormControl<string | null>;
  address: FormControl<string | null>;
  state: FormControl<string | null>;
  tax: FormControl<string | null>;
  city: FormControl<string | null>;
  paymentMethod: FormControl<number | null>;
  cardName: FormControl<string | null>;
  cardMonth: FormControl<string | null>;
  cardYear: FormControl<string | null>;
  cardNumber: FormControl<string | null>;
  cardCode: FormControl<string | null>;
  createdAt: FormControl<Date | null>;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  registerFormGroup!: FormGroup<RegisterFormGroup>;
  customerId?: string;

  ufs$!: Observable<IUf[]>;
  cities$!: Observable<ICity[]>;

  constructor(
    private customerProvider: CustomerProvider,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ibgeProvider: IbgeProvider
  ) {
    this.bootstrapFormGroup();
  }

  bootstrapFormGroup(): void {
    this.registerFormGroup = new FormGroup<RegisterFormGroup>({
      id: new FormControl(),
      address: new FormControl(null, [Validators.required]),
      city: new FormControl({ disabled: true, value: null }, [
        Validators.required,
      ]),
      cpf: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      tax: new FormControl(null, [Validators.required]),
      paymentMethod: new FormControl(1, [Validators.required]),
      cardName: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      cardMonth: new FormControl(null, [Validators.required]),
      cardYear: new FormControl(null, [Validators.required]),
      cardNumber: new FormControl(null, [Validators.required]),
      cardCode: new FormControl(null, [Validators.required]),
      createdAt: new FormControl<Date>(new Date()),
    });

    this.registerFormGroup.controls.state.valueChanges.subscribe((change) => {
      if (!change) return;
      this.cities$ = this.ibgeProvider.getCities(change).pipe(
        tap(() => {
          this.registerFormGroup.controls.city.enable();
          if (this.registerFormGroup.controls.state.dirty) {
            this.registerFormGroup.controls.city.setValue(null);
          }
        })
      );
    });
  }

  onSubmit(): void {
    if (this.registerFormGroup.invalid) {
      this.registerFormGroup.markAllAsTouched();

      return;
    }

    const isUpdateMode = this.customerId;

    const formData = this.registerFormGroup.getRawValue();

    if (isUpdateMode) {
      this.customerProvider
        .put('customers/' + formData.id, formData)
        .subscribe(() => {
          this.router.navigate(['/']);
        });
    } else {
      this.customerProvider.post('customers', formData).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  initialize(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['id']) {
        this.customerId = params['id'];

        this.customerProvider
          .getCustomersById(this.customerId!)
          .subscribe((customers: ICustomer[]) => {
            this.registerFormGroup.patchValue(customers[0]);
          });
      }
    });

    this.ufs$ = this.ibgeProvider.getUf();
  }

  ngOnInit(): void {
    this.initialize();
  }
}
