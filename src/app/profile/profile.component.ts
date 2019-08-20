import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Profilevalidator } from './custom.validation';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  // log(x){console.log(x);}

  empdetails = new FormGroup({
    // firstname: new FormControl('', [
    //   Validators.required,
    //   Validators.minLength(6), 
    //   Profilevalidator.cannotcontainspace,
    //   Profilevalidator.shouldBeUnique,
    // ]), 
    firstname: new FormControl('', Validators.required), 
    lastname: new FormControl('', Validators.required), 
    contactnumber: new FormControl('', [
      Validators.required, Validators.maxLength(10),
    ]), 
    empid: new FormControl('',[
      Validators.required, 
    ]), 
    gender: new FormControl(''), 
    perlmail: new FormControl('', Validators.required), 
    bloodtype: new FormControl(''), 
    officenumber: new FormControl(''), 
    officemail: new FormControl('', Validators.required), 
    dob: new FormControl('', Validators.required), 
    pannumber: new FormControl('', Validators.required),
    passport: new FormControl(''),
    emgcontactname: new FormControl('', Validators.required), 
    emgcontactnumber: new FormControl('', Validators.required), 
    relationship: new FormControl('', Validators.required), 
    address: new FormControl('', Validators.required), 
    pincode: new FormControl('', Validators.required),
    backname: new FormControl('', Validators.required), 
    accountno: new FormControl('', Validators.required),
    branch: new FormControl('', Validators.required), 
    ifscode: new FormControl('', Validators.required), 
    salary: new FormControl('', Validators.required), 
    taxno: new FormControl(''), 

  });
  get firstname(){
    return this.empdetails.get('firstname');
  }
  get lastname(){
    return this.empdetails.get('lastname');
  }
  get contactnumber(){
    return this.empdetails.get('contactnumber');
  }
  get perlmail(){
    return this.empdetails.get('perlmail');
  }

  get officemail(){
    return this.empdetails.get('officemail');
  }
  get dob(){
    return this.empdetails.get('dob');
  }
  get pannumber(){
    return this.empdetails.get('pannumber');
  }
  
  get emgcontactname(){
    return this.empdetails.get('emgcontactname');
  }
  get emgcontactnumber(){
    return this.empdetails.get('emgcontactnumber');
  }
  get relationship(){
    return this.empdetails.get('relationship');
  }
  get address(){
    return this.empdetails.get('address');
  }
  get pincode(){
    return this.empdetails.get('pincode');
  }
  get backname(){
    return this.empdetails.get('backname');
  }
  get accountno(){
    return this.empdetails.get('accountno');
  }
  get branch(){
    return this.empdetails.get('branch');
  }
  get ifscode(){
    return this.empdetails.get('ifscode');
  }
  get salary(){
    return this.empdetails.get('salary');
  }
 







  public imagePath;
  imgURL: any;
  public message: string;

  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }
}
