import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderserviceService } from 'src/app/service/orderservice.service';

@Component({
  selector: 'app-orderreport',
  templateUrl: './orderreport.component.html',
  styleUrls: ['./orderreport.component.scss']
})
export class OrderreportComponent implements OnInit {

  stocklist: any[] = []
totalamt=0;
public cartlist : any[]=[];
value: any[] = [];
public instrumentlist : any[]=[];
dailysales!:FormGroup
count=0;
count11:any
constructor(private registration:OrderserviceService,private fb:FormBuilder,private router:Router,private route:ActivatedRoute) { }
categoryControl = new FormControl('');
todateControl= new FormControl('');
ngOnInit(): void {
this.dailysales=this.fb.group({ 
totalamount:[''],
});
}
onChange(event: any) {
console.log(this.categoryControl.value,this.todateControl.value)
this.registration.getbookingBydate(this.categoryControl.value, 
this.todateControl.value)
.subscribe(res => {
  
  
console.log(res)
// this.cartSum() ;
this.stocklist = res;
this.count11=this.stocklist.length;
this.value=this.stocklist
for(let i=0;i<this.stocklist.length;i++){
this.totalamt+=this.value[i].totalamount;
console.log(this.totalamt)
}
this.dailysales.get("totalamount")?.setValue(this.totalamt)
})
}
cartSum(){ 
// this.totalamt=0; 
this.value=this.stocklist
for(let i=0;i<this.stocklist.length;i++){
this.totalamt+=this.value[i].total_amount;
console.log(this.totalamt)
}
console.log(this.totalamt)
}
}
