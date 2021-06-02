import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

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

  mentorado: any=null;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.mentorado = navigation?.extras?.state!.value;
  }

  ngOnInit(): void {
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
