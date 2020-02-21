import { Component, OnInit } from '@angular/core';
import { TemplateService } from 'src/app/_services/template.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-thymeleaf',
  templateUrl: './thymeleaf.component.html',
  styleUrls: ['./thymeleaf.component.scss']
})
export class ThymeleafComponent implements OnInit {
  thymeleafForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;

  constructor(
    private templateService: TemplateService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.fetchTemplate();

    this.thymeleafForm = this.formBuilder.group({
      to: ['', Validators.compose([Validators.required, Validators.email])],
      subject: ['', Validators.required],
      replacementVariable: ['', Validators.required]
    });
  }

  fetchTemplate() {
    console.log('fetching template');
    this.templateService.fetchTemplate();
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.thymeleafForm.invalid) {
      return;
    }

    this.loading = true;

  }
}
