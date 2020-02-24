import { Component, OnInit } from '@angular/core';
import { TemplateService } from 'src/app/_services/template.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-velocity',
  templateUrl: './velocity.component.html',
  styleUrls: ['./velocity.component.scss']
})
export class VelocityComponent implements OnInit {
  velocityForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;

  constructor(
    private templateService: TemplateService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.fetchTemplate();

    this.velocityForm = this.formBuilder.group({
      to: ['', Validators.compose([Validators.required, Validators.email])],
      subject: ['', Validators.required],
      replacementVariable: ['', Validators.required]
    });
  }

  get form() {
    return this.velocityForm.controls;
  }

  fetchTemplate() {
    console.log('fetching template');
    // this.templateService.fetchTemplate();
  }

  onSubmit() {
    this.submitted = true;

console.log('testing here')

    // stop here if form is invalid
    if (this.velocityForm.invalid) {
      return;
    }

    this.templateService.sendEmail(this.form.to.value, this.form.subject.value, this.form.replacementVariable.value, "velocity");

    this.loading = true;

  }
}
