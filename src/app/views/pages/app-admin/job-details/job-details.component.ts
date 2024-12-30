import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/core/Services/JobService/job.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  jobId: number | null = null;
  jobDetails: any = null;
  resumeFile: File | null = null;  // Store the selected file
  jobForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private fb: FormBuilder,
    private location: Location
  ) {
    this.jobForm = this.fb.group({
      title: [''],
      company: [''],
      location: [''],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.jobId = +params.get('id')!;
      if (this.jobId === 0) {
        this.jobDetails = null;  // No job details for jobId 0
      } else {
        this.fetchJobDetails(this.jobId);
      }
    });
  }

  fetchJobDetails(id: number): void {
    this.jobService.getJobDetails(id).subscribe(
      (data) => {
        this.jobDetails = data;
      },
      () => {
        console.error('Error fetching job details');
      }
    );
  }

  onFileChange(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.resumeFile = event.target.files[0];
    }
  }

  onSubmit(form: any): void {
    if (form.valid && this.resumeFile) {
      const formData: FormData = new FormData();
      formData.append('JobId', this.jobId?.toString() || '');  // Assuming jobId is optional for new job
      formData.append('ApplicantName', form.value.title);  // Map form fields as necessary
      formData.append('ApplicantEmail', form.value.company);  // Assuming email is entered as 'company'
      formData.append('Resume', this.resumeFile, this.resumeFile.name);

      // Call the service's addJob method to post job
      this.jobService.addJob(formData).subscribe(
        (response) => {
          console.log('Job added successfully:', response);
          // Optionally, navigate or show a success message
        },
        (error) => {
          console.error('Error adding job:', error);
        }
      );
    } else {
      console.log('Form is invalid or file not selected');
    }
  }

  goBack(): void {
    this.location.back();
  }
}
