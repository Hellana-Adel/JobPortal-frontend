import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/core/Model/iuser';
import Swal from 'sweetalert2';

import { JobService } from 'src/app/core/Services/JobService/job.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AllUserComponent implements OnInit {
  constructor(private router: Router, private jobService: JobService, private fb: FormBuilder) {

  }
  selectedJob: any = null;
  page = 1;
  pageSize = 5;
  jobs: Job[] = [];
  applyForm!: FormGroup;

  ngOnInit(): void {
    this.loadJobs();
    this.applyForm = this.fb.group({
      ApplicantName: ['', Validators.required],
      ApplicantEmail: ['', [Validators.email, Validators.required]],
      resume: ['', Validators.required]
    });

  }

  loadJobs(): void {
    this.jobService.getJobs().subscribe((data) => {
      this.jobs = data;
      console.log(this.jobs)

    });


  }
  openApplyForm(job: any) {
    this.selectedJob = job;
  }

  // Handle file input change
  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.selectedJob.resume = event.target.files[0];
    }
  }

  applyForJob() {
    if (this.selectedJob) {
      console.log('Selected Job:', this.selectedJob);
      const applicantName = this.applyForm.get('ApplicantName')?.value;
      const applicantEmail = this.applyForm.get('ApplicantEmail')?.value;

      const applicationData = new FormData();
      applicationData.append('JobId', this.selectedJob.jobId);
      applicationData.append('ApplicantName', applicantName);
      applicationData.append('ApplicantEmail', applicantEmail);
      applicationData.append('Resume', this.selectedJob.resume, this.selectedJob.resume.name);

      console.log(applicationData)
      this.jobService.applyForJob(applicationData).subscribe(
        (response) => {
          Swal.fire({
            title: 'Success!',
            text: 'Your application has been submitted successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            this.selectedJob = null;
          });
        },
        (error) => {
          Swal.fire({
            title: 'Error!',
            text: 'There was an error submitting your application. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
          console.error('Error submitting application:', error);
        }
      );
    }
  }


}


