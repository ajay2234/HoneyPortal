import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from 'src/app/service/productservice.service';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.scss']
})
export class ProducteditComponent implements OnInit {
  producteditform!:FormGroup
  productlist:any[]=[];
  productId:any; 
  categorylist:any[]=[];
  public choosenFile: any;
public loading= false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private productservice: ProductserviceService
  ) {route.params.subscribe(cat => { this.productId = cat['id'];}) }

  ngOnInit(): void {
    this.producteditform = this.fb.group
    (
      { 
      cat_name: [''],
      product_name: [''],
      product_image:[''],
      product_description: [''], 
      product_count:[''],
      product_amount: [''],  
   });
   this.productservice.getcategoryList().subscribe((data: any) => { 
    this.productlist = data;
     console.log(data) });

     if(this.productId){ 
      this.productservice.getProductById(this.productId) 
      .subscribe((result: any)=>{ 
    if(result){ this.producteditform.patchValue(result); }
  }) } 
  else{ alert("failed"); } 
}

  onChange(event: any) 
  { 
    console.log(this.producteditform.value) 
    this.productservice.getProductByCat(
      this.producteditform.value.cat_name) 
    .subscribe(res => { console.log(res) 
      this.productlist = res; })
     }  
     uploadFile() {
    }
    edit() {
    this.loading = true;
    this.productservice.upload(this.choosenFile)
    .then(url => {
    if (url) {
    this.producteditform.patchValue({
      product_image: url
    })
    this.productservice.updateProduct(this.productId,this.producteditform.value).then(() => {
    this.loading = false;
    
    
    this.router.navigate(["/customermaster/mypost"]);
   
    
    });
    } else {
    alert("image upload error")
    }
    })
    .catch(err => {
    this.loading = false;
    console.log(err)
    })
    }
    handleFileInput(event: any) {
    console.log(event.target.files[0])
    this.choosenFile = event.target.files[0]
    }  
   

  }
  


