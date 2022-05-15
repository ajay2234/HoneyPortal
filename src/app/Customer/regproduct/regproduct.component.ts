import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from 'src/app/service/productservice.service';

@Component({
  selector: 'app-regproduct',
  templateUrl: './regproduct.component.html',
  styleUrls: ['./regproduct.component.scss']
})
export class RegproductComponent implements OnInit {
productForm!: FormGroup;
public choosenFile: any;
public loading = false;
categoryList:any[]=[];
  savestatus=false;
  constructor(
private router: Router,
private route: ActivatedRoute,
private fb:FormBuilder,
private productservice: ProductserviceService
  )
  {}

  ngOnInit(): void {
    this.productForm=this.fb.group({
      cat_name:[''],
      product_name :['',Validators.required],
      product_description :[''],
      product_image :[''],
      product_amount :['',Validators.required],
      product_count :['',Validators.required],
      date:[''],
      uid:localStorage.getItem("userid") 

    })
    this.productservice.getcategoryList().subscribe((data: any) => {
      this.categoryList = data;
      console.log(data)
    });
  }
  saveProduct()
  {

    if(!this.productForm.valid)
    {
      this.savestatus=true;
      return
    }
    else
    {

    
  this.productservice.upload(this.choosenFile)
  .then(url => {
    if (url) {
      this.productForm.patchValue({
        product_image: url
      })
  
  this.productservice.saveProduct(this.productForm.value).then(()=>
  {
    this.router.navigate(["/customermaster/mypost"]);
  });

} else
{
alert("image upload error")
}

})

.catch(err => {
this.loading = false;
console.log(err)
})
  }
}
 handleFileInput(event: any) {
   console.log(event.target.files[0])
   this.choosenFile = event.target.files[0]

 }
  }

