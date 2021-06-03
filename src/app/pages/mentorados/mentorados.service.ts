import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mentorado } from 'src/app/shared/models/mentorado.interface';

@Injectable({
  providedIn: 'root'
})
export class MentoradosService {

  mentorados: Observable<Mentorado[]> | undefined;
  private mentoradosCollection: AngularFirestoreCollection<Mentorado>;

  constructor(private readonly afs: AngularFirestore) {
    this.mentoradosCollection = afs.collection<Mentorado>('mentorados');
    this.getMentorados();
  }

   onDeleteMentorado(mentId: any): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result=await this.mentoradosCollection.doc(mentId).delete();
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    })
   }  

  onSaveMentorado(mentorado: Mentorado, mentId: string | undefined): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id =  mentId || this.afs.createId();
        const data = { id, ...mentorado };
        const result =await this.mentoradosCollection.doc(id).set(data);
        alert('Proceso realizado con exito');
        resolve(result);        
      } catch (error) {
        alert('error al agregar el cliente')
        reject(error.message);
      }
    });
  }

  private getMentorados(): void {
    this.mentorados = this.mentoradosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Mentorado))
    );
  }
}
