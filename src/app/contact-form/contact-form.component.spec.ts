import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ContactFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.contactForm.valid).toBeFalsy();
  });

  // it('email field validity', () => {
  //   let errors = {};
  //   let email = component.contactForm.controls['email'];
  //   expect(email.valid).toBeFalsy();

  //   // Email field is required
  //   errors = email.errors || {};
  //   expect(errors['required']).toBeTruthy();

  //   // Set email to something
  //   email.setValue('test');
  //   errors = email.errors || {};
  //   expect(errors['required']).toBeFalsy();
  //   expect(errors['pattern']).toBeTruthy();

  //   // Set email to something correct
  //   email.setValue('test@example.com');
  //   errors = email.errors || {};
  //   expect(errors['required']).toBeFalsy();
  //   expect(errors['pattern']).toBeFalsy();
  // });

  it('should require valid email', () => {
    component.contactForm.setValue({
      name: '',
      email: 'invalidemail',
      message: '',
    });

    expect(component.contactForm.valid).toEqual(false);
  });

  it('should be valid if form value is valid', () => {
    component.contactForm.setValue({
      name: 'Bobby',
      email: 'bobby@bobby.com',
      message: 'Email me a soda, please.',
    });

    expect(component.contactForm.valid).toEqual(true);
  });

  it('submitting a form emits a user', () => {
    expect(component.contactForm.valid).toBeFalsy();
    component.contactForm.controls['email'].setValue('test@test.com');
    component.contactForm.controls['name'].setValue('testUser');
    component.contactForm.controls['message'].setValue('test message');
    expect(component.contactForm.valid).toBeTruthy();
  });
});
