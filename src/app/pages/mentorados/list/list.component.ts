import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Mentorado } from 'src/app/shared/models/mentorado.interface';
import { MentoradosService } from '../mentorados.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  //creamos un observable
  mentorados$ = this.mentoradosSvg.mentorados;

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };


  constructor(private router: Router, private mentoradosSvg: MentoradosService) { }

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

  async onGoDelete(mentId: any): Promise<void> {
    try {
      await this.mentoradosSvg.onDeleteMentorado(mentId);
      alert('Registro eliminado con exito');
    } catch (error) {
      alert('Error al eliminar el registro');
    }
  }


}
