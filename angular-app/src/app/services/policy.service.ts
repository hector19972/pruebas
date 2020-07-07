import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Policy } from '../models/policy.model';
@Injectable({
  providedIn: 'root',
})
export class PolicyService {
  constructor(private firestore: AngularFirestore) {}

  getPolicies() {
    return this.firestore.collection('biblioteca').snapshotChanges();
  }
  createPolicy(policy: Policy) {
    return this.firestore.collection('biblioteca').add(policy);
  }

  getLibro(libroID: string){
    return this.firestore.collection('biblioteca').doc(libroID).snapshotChanges();
  }

  updatePolicy(policy: Policy) {
    delete policy.codigoLibro;
    this.firestore.doc('biblioteca/' + policy.codigoLibro).update(policy);
  }
  deletePolicy(policyId: string) {
    this.firestore.doc('biblioteca/' + policyId).delete();
  }
}
