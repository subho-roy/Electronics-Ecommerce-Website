import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Serve1Service } from '../f1/serve1.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  val: any | undefined;
  arrobj: any | undefined;
  val1: string = '';
  matched: any | undefined;
  searchVal: string = '';
  public f_arr: any = [];
  public dropdownArr: any[] = ['High to low', 'Low to high'];
  constructor(private activ: ActivatedRoute, private ins: Serve1Service) {}

  ngOnInit(): void {
    this.activ.paramMap.subscribe((params: any) => {
      this.val = params.get('prod_name');
      console.log(this.val);
      this.arrobj = this.ins.product.filter(
        (d: any) => d.prod_name == this.val
      );
      console.log(this.arrobj);
    });
  }
  taking() {
    console.log(this.searchVal);
  }

  sortItem(eve: any) {
    if (eve.target.outerText == 'High to low') {
      this.arrobj[0].sub.sort(function (a: any, b: any) {
        return b.price > a.price ? 1 : a.price > b.price ? -1 : 0;
      });
    } else if (eve.target.outerText == 'Low to high') {
      this.arrobj[0].sub.sort(function (a: any, b: any) {
        return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
      });
    }
  }
}
