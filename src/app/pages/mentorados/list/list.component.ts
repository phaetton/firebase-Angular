import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Mentorado } from 'src/app/shared/models/mentorado.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

 
  fakeData = [
    {
      nombre: 'Jose',
      apellido: 'Perez',
      email: 'Jose@jose.com',
      fechanac: '02/04/1986'
    },
    {
      nombre: 'pedro',
      apellido: 'Perez',
      email: 'Jose@jose.com',
      fechanac: '02/04/1986'
    },
    {
      nombre: 'Mario',
      apellido: 'Perez',
      email: 'Jose@jose.com',
      fechanac: '02/04/1986'
    },
    {
      nombre: 'Maria',
      apellido: 'Perez',
      email: 'Jose@jose.com',
      fechanac: '02/04/1986'
    },
    {
      nombre: 'Jean',
      apellido: 'Perez',
      email: 'Jose@jose.com',
      fechanac: '02/04/1986'
    },

  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onGoEdit(item: any): void {
    this.navigationExtras.state!.value = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  onGoSee(item: any): void {
    this.navigationExtras.state!.value = item;
    this.router.navigate(['details'], this.navigationExtras);
  }
  onGoDelete(item: any): void {
    alert('Deleted');
  }

  
}
