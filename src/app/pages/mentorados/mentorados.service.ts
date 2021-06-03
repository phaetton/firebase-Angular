import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mentorado } from 'src/app/shared/models/mentorado.interface';

@Injectable({
  providedIn: 'root'
})
export class MentoradosService {

  mentorados?: Observable<Mentorado[]> ;
  private mentoradosCollection: AngularFirestoreCollection<Mentorado>;

  constructor(private readonly afs: AngularFirestore) {
    this.mentoradosCollection = afs.collection<Mentorado>('mentorados');
    this.getMentorados();
  }

  onDeleteMentorado(mentId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result=await this.mentoradosCollection.doc(mentId).delete();
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    })
   }

  onSaveMentorado(mentorado: Mentorado): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id =this.afs.createId();
        const data = { id, ...mentorado };
        const result =await this.mentoradosCollection.doc(id).set(data);
        alert('agregado con exito');
        resolve(result);        
      } catch (error) {
        alert('error al agregar el cliente'+error.message);
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
