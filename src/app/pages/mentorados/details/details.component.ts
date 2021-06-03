import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Mentorado } from 'src/app/shared/models/mentorado.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  navigationExtras:NavigationExtras={
    state:{
      value:null
    }
  };

  mentorado: Mentorado;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.mentorado = navigation?.extras?.state!.value;
  }

  ngOnInit(): void {
    if(typeof this.mentorado==='undefined'){
      this.router.navigate(['list']);
    }
  }

  onGoEdit(): void {
    this.navigationExtras.state!.value = this.mentorado;
    this.router.navigate(['edit'], this.navigationExtras);
  }
  onDelete():void{
    alert('Deleted');
  }

  onGoBackList():void{
    this.router.navigate(['list']);
  }

}
