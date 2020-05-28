import { DatapassService } from './../../../datapass.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  email: any;
  userData;
  fullName;
  allProduct;
  base64;
  fileName;
  constructor(
    private datapass: DatapassService,
    private router: ActivatedRoute,
    private http: HttpClient
  ) {
    this.email = router.snapshot.params['email'];
  }

  ngOnInit() {
    this.getUser();
    this.http
      .get('http://anuwataravis-ekyya.run-ap-south1.goorm.io/users')
      .subscribe(
        (response) => {
          console.log('DashboardComponent -> ngOnInit -> response', response);
          this.allProduct = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getUser() {
    let request = this.http
      .get('http://202.28.34.250/webdev/user/' + this.email)
      .subscribe(
        (response: any) => {
          this.fullName = response.firstName + response.lastName;
        },
        (error) => {
          console.log(error);
        }
      );
    return request;
  }

  uploadFile() {
    console.log('upload file click');

    let json = {
      filename: this.fileName,
      base64: this.base64,
    };

    this.http
      .post('http://anuwataravis-ekyya.run-ap-south1.goorm.io/upload', json, {
        responseType: 'text',
      })
      .subscribe(
        (data) => {
          console.log('done');
          console.log(JSON.parse(data));
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getFile(files: FileList) {
    let file = files.item(0);
    this.fileName = file.name;
    console.log(this.fileName);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.base64 = reader.result;
    };
  }
}
