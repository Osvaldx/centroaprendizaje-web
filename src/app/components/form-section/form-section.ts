import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-section',
  imports: [ReactiveFormsModule],
  templateUrl: './form-section.html',
  styleUrl: './form-section.css',
  providers: [HttpClient]
})
export class FormSection {

  public ContactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    message: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(500)])
  })

  public showSuccessModal = signal(false);
  public showErrorModal = signal(false);
  public isLoading = signal(false);

  constructor(private http: HttpClient) { }

  public onSubmit() {
    if (this.ContactForm.valid) {
      console.log('Formulario enviado:', this.ContactForm.value);
      this.isLoading.set(true);
      
      const formData = this.ContactForm.value;

      this.http.post('https://formspree.io/f/mblpgbzl', formData).subscribe({
        next: () => {
          this.isLoading.set(false);
          this.showSuccessModal.set(true);
          this.ContactForm.reset();
        },
        error: (err: any) => {
          this.isLoading.set(false);
          this.showErrorModal.set(true);
          console.log(err);
        }
      })
    }
  }

  public closeModal() {
    this.showSuccessModal.set(false);
    this.showErrorModal.set(false);
  }

}
