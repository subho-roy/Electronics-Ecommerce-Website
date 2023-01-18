import { Component, OnInit ,HostListener} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Serve1Service } from '../f1/serve1.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {

  subid: any | undefined;
  prodname:any|undefined;
  prodid: any | undefined;
  per_prod: any;
  sub_prod: any={};
  img2:string='';
  ind=0;
  img1:any[]=['https://www.cnet.com/a/img/resize/153094126ca682eff148d328a7d32c8cb188fe1d/hub/2022/02/22/9dcce41d-c93b-4eb0-b0e1-29e103c40d73/samsung-galaxy-s22-review-014.jpg?auto=webp&width=1200','https://images.hindustantimes.com/tech/img/2022/03/13/960x540/Cover_1647136681697_1647136698213.jpg','https://images.hindustantimes.com/tech/img/2022/03/07/original/Untitled_design_-_2022-03-07T113223.619_1646636124332.jpg']

  constructor(private ins: Serve1Service, private activ: ActivatedRoute,private route:Router) {}

  ngOnInit(): void {
    this.activ.paramMap.subscribe((params: any) => {
      this.prodid = params.get('prodId');
      // console.log(this.prodid);
       this.subid = params.get('sub_id');
      //  console.log(this.subid);
       this.per_prod=this.ins.product.find((a:any)=>
        a.prodId==this.prodid
       );
       console.log(this.per_prod);
       this.sub_prod=this.per_prod.sub.find((d:any)=>
        d.sub_id==this.subid
       );
       console.log(this.sub_prod,'single product');
       
       
    });
    
  }
  chngeImg(index:number)
  {
    this.ind=index;

  }
  iamg(d:any)
  {
    this.img2=d.value;
  }
  hello()
  {
    this.route.navigateByUrl("/category/{{ per_prod.prod_name }}");
  }
  
}
