import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AlertService } from '../_alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {


  constructor(
    private http: HttpClient,
    private alertService: AlertService,
  ) { }

  fetchTemplate() {
    console.log('getting template from server')
    return this.http.get(`http://localhost:8080/api/auth/template`).subscribe();
  }

  sendEmail(to: string, subject: string, replacementVariable: string, templateEngine: string) {
    console.log("Sending email to " + to + " with the subject: " + subject + ". The replacement variable will be " + replacementVariable + ".");

    let httpParams = new HttpParams()
        .set('to', to)
        .set('subject', subject)
        .set('replacementVariable', replacementVariable)
        .set('templateEngine', templateEngine);
                  
    return this.http.get(`http://localhost:8080/api/auth/send-email`, { params: httpParams }).subscribe(data => {
      this.alertService.success('Email Sent Successfully'); // Alternative Alert Service
    },
    error => {
      this.alertService.error('Email Send Failed'); // Alternative Alert Service
    });
  }
}