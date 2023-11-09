import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pt = 'ABC';
  dt = 'ADE';
  cp1 = 'BC';
  cp2 = 'DE';
  tete = 'A';
  // title = 'thales';
  // premierTriangle = '';
  // deuxiemeTriangle = '';
  // cotesParaleles = '';
  // teteCommune = '';
  // donneeNumerique = '';
  AB = 0;
  BC = 0;
  AC = 0;

  AD = 0;
  AE = 0;
  DE = 0;

  CD = 0;
  BE = 0;
  resultat: any = `
  AB=${this.AB},
   BC=${this.BC},
    AC=${this.AC},
     AD=${this.AD},
      AE=${this.AE},
       DE=${this.DE},
       AE=${this.CD},
       DE=${this.BE}.`.split(',');
  getAB() {
    return 'AB';
    let split = this.pt.toUpperCase().split('');
    let a = split[0];
    let b = split[1];
    let c = split[2];
    let tete = this.tete.toUpperCase();
    if (a == tete) {
      return a + b;
    }
    if (b == tete) {
      return b + a;
    }
    if (c == tete) {
      return b + c;
    }
    return '';
  }
  getAC() {
    return 'AC';
    let split = this.pt.toUpperCase().split('');
    let a = split[0];
    let b = split[1];
    let c = split[2];
    let tete = this.tete.toUpperCase();
    if (a == tete) {
      return a + c;
    }
    if (b == tete) {
      return b + c;
    }
    if (c == tete) {
      return c + a;
    }
    return '';
  }
  getBC() {
    return 'BC';
    return this.cp1.toUpperCase();
  }
  getDE() {
    return 'DE';
    return this.cp2.toUpperCase();
  }
  getAD() {
    return 'AD';
    let split = this.dt.toUpperCase().split('');
    let a = split[0];
    let d = split[1];
    let e = split[2];
    let tete = this.tete.toUpperCase();
    if (a == tete) {
      return a + d;
    }
    if (d == tete) {
      return a + d;
    }
    if (e == tete) {
      return e + d;
    }
    return '';
  }
  getAE() {
    return 'AE';
    let split = this.dt.toUpperCase().split('');
    let a = split[0];
    let d = split[1];
    let e = split[2];
    let tete = this.tete.toUpperCase();
    if (a == tete) {
      return a + e;
    }
    if (d == tete) {
      return d + e;
    }
    if (e == tete) {
      return e + a;
    }
    return '';
  }
  getCD() {
    return 'CD';
    let splt1 = this.cp1.toUpperCase().split('');
    let splt2 = this.cp2.toUpperCase().split('');
    let b = splt1[0];
    let c = splt1[1];
    let d = splt2[0];
    let e = splt2[1];
    return c + d;
  }
  getBE() {
    return 'BE';
    let splt1 = this.cp1.toUpperCase().split('');
    let splt2 = this.cp2.toUpperCase().split('');
    let b = splt1[0];
    let c = splt1[1];
    let d = splt2[0];
    let e = splt2[1];
    return b + e;
  }
  calc() {
    for (let i = 0; i < 10; i++) {
      if (this.AD != 0 && this.AB != 0 && this.AC != 0 && this.AE == 0) {
        this.AE = (this.AD * this.AB) / this.AC;
        let div =
          document.getElementById('AE') || document.createElement('div');
        div.style.border = '3px solid green';
        console.log('AE', this.AE);
      }
      if (this.AC != 0 && this.AE != 0 && this.AD != 0 && this.AB == 0) {
        this.AB = (this.AC * this.AE) / this.AD;
        let div =
          document.getElementById('AB') || document.createElement('div');
        div.style.border = '3px solid green';
        console.log('AB', this.AB);
      }
      if (this.AB != 0 && this.AD != 0 && this.AE != 0 && this.AC == 0) {
        this.AC = (this.AB * this.AD) / this.AE;
        let div =
          document.getElementById('AC') || document.createElement('div');
        div.style.border = '3px solid green';
        console.log('AC', this.AC);
      }
      if (this.AC != 0 && this.AE != 0 && this.AB != 0 && this.AD == 0) {
        this.AD = (this.AC * this.AE) / this.AB;
        let div =
          document.getElementById('AD') || document.createElement('div');
        div.style.border = '3px solid green';
        console.log('AD', this.AD);
      }
      //--
      if (this.AD != 0 && this.BC != 0 && this.DE != 0 && this.AC == 0) {
        this.AC = (this.AD * this.BC) / this.DE;
        let div =
          document.getElementById('AC') || document.createElement('div');
        div.style.border = '3px solid green';
        console.log('AC', this.AC);
      }
      if (this.AC != 0 && this.DE != 0 && this.BC != 0 && this.AD == 0) {
        this.AD = (this.AC * this.DE) / this.BC;
        let div =
          document.getElementById('AD') || document.createElement('div');
        div.style.border = '3px solid green';
        console.log('AD', this.AD);
      }
      if (this.DE != 0 && this.AC != 0 && this.AD != 0 && this.BC == 0) {
        this.BC = (this.DE * this.AC) / this.AD;
        let div =
          document.getElementById('BC') || document.createElement('div');
        div.style.border = '3px solid green';
        console.log('BC', this.BC);
      }
      if (this.BC != 0 && this.AD != 0 && this.AC != 0 && this.DE == 0) {
        this.DE = (this.BC * this.AD) / this.AC;
        let div =
          document.getElementById('DE') || document.createElement('div');
        div.style.border = '3px solid green';
        console.log('DE', this.DE);
      }
      //--
      if (this.BC != 0 && this.AE != 0 && this.DE != 0 && this.AB == 0) {
        this.AB = (this.BC * this.AE) / this.DE;
        let div =
          document.getElementById('AB') || document.createElement('div');
        div.style.border = '3px solid green';
        console.log('AB', this.AB);
      }
      if (this.AB != 0 && this.DE != 0 && this.BC != 0 && this.AE == 0) {
        this.AE = (this.AB * this.DE) / this.BC;
        let div =
          document.getElementById('AE') || document.createElement('div');
        div.style.border = '3px solid green';
        console.log('AE', this.AE);
      }
      if (this.AB != 0 && this.DE != 0 && this.AE != 0 && this.BC == 0) {
        this.BC = (this.AB * this.DE) / this.AE;
        let div =
          document.getElementById('BC') || document.createElement('div');
        div.style.border = '3px solid green';
        console.log('BC', this.BC);
      }
      if (this.AE != 0 && this.BC != 0 && this.AB != 0 && this.DE == 0) {
        this.DE = (this.AE * this.BC) / this.AB;
        let div =
          document.getElementById('DE') || document.createElement('div');
        div.style.border = '3px solid green';
        console.log('DE', this.DE);
      }
      //--
      if (this.AB != 0 && this.CD != 0 && this.BE != 0 && this.AC == 0) {
        this.AC = (this.AB * this.CD) / this.BE;
        let div =
          document.getElementById('AC') || document.createElement('div');
        div.style.border = '3px solid green';
        console.log('AC', this.AC);
      }
      if (this.AC != 0 && this.BE != 0 && this.AB != 0 && this.CD == 0) {
        this.CD = (this.AC * this.BE) / this.AB;
        let div =
          document.getElementById('CD') || document.createElement('div');
        div.style.border = '3px solid green';
        console.log('CD', this.CD);
      }
      if (this.AC != 0 && this.BE != 0 && this.CD != 0 && this.AB == 0) {
        this.AB = (this.AC * this.BE) / this.CD;
        let div =
          document.getElementById('AB') || document.createElement('div');
        div.style.border = '3px solid green';
        console.log('AB', this.AB);
      }

      if (this.AB != 0 && this.CD != 0 && this.AC != 0 && this.BE == 0) {
        this.BE = (this.AB * this.CD) / this.AC;
        let div =
          document.getElementById('BE') || document.createElement('div');
        div.style.border = '3px solid green';
        console.log('BE', this.BE);
      }
      //--
      if (this.AC != 0 && this.CD != 0 && this.AD == 0) {
        this.AD = this.AC + this.CD;
        let div =
          document.getElementById('AD') || document.createElement('div');
        div.style.border = '3px solid green';
      }
      if (this.AD != 0 && this.AC != 0 && this.CD == 0) {
        this.CD = this.AD - this.AC;
        let div =
          document.getElementById('CD') || document.createElement('div');
        div.style.border = '3px solid green';
      }
      if (this.AD != 0 && this.CD != 0 && this.AC == 0) {
        this.AC = this.AD - this.CD;
        let div =
          document.getElementById('AC') || document.createElement('div');
        div.style.border = '3px solid green';
      }
      //--
      if (this.AB != 0 && this.BE != 0 && this.AE == 0) {
        this.AE = this.AB + this.BE;
        let div =
          document.getElementById('AE') || document.createElement('div');
        div.style.border = '3px solid green';
      }
      if (this.AE != 0 && this.AB != 0 && this.BE == 0) {
        this.BE = this.AE - this.AB;
        let div =
          document.getElementById('BE') || document.createElement('div');
        div.style.border = '3px solid green';
      }
      if (this.AD != 0 && this.CD != 0 && this.AC == 0) {
        this.AC = this.AD - this.CD;
        let div =
          document.getElementById('AC') || document.createElement('div');
        div.style.border = '3px solid green';
      }
    }
    this.resultat = `
    AB=${this.AB}, 
    BC=${this.BC},
    AC=${this.AC},
    AD=${this.AD},
    AE=${this.AE},
    DE=${this.DE},
    AE=${this.CD},
    DE=${this.BE}.`;
    this.resultat = this.resultat.split(',');

    // let premier = this.premierTriangle.toUpperCase().split('');
    // if (premier.length != 3) {
    //   alert('Le premier triangle doit avoir 3 lettres');
    //   return;
    // }
    // let a = premier[0];
    // let b = premier[1];
    // let c = premier[2];
    // let deuxieme = this.deuxiemeTriangle.toUpperCase().split('');
    // if (deuxieme.length != 3) {
    //   alert('Le deuxieme triangle doit avoir 3 lettres');
    //   return;
    // }
    // let d = deuxieme[0];
    // let e = deuxieme[1];
    // let f = deuxieme[2];
    // let cotesParaleles = this.cotesParaleles.toUpperCase().split(',');
    // if (cotesParaleles.length != 5) {
    //   alert('Les cotes paraleles doivent avoir 5 lettres');
    //   return;
    // }
    // let cp1 = cotesParaleles[0];
    // let cp1Splitted = cp1.split('');
    // let cp11 = cp1Splitted[0];
    // let cp12 = cp1Splitted[1];
    // let cp2 = cotesParaleles[1];
    // let cp2Splitted = cp2.split('');
    // let cp21 = cp2Splitted[0];
    // let cp22 = cp2Splitted[1];
    // let teteCommune = this.teteCommune.toUpperCase();
    // if (teteCommune.length != 1) {
    //   alert('La tete commune doit avoir 1 lettre');
    //   return;
    // }
    // let donneesNumeriques = this.donneeNumerique.toUpperCase().split(',');
    // if (donneesNumeriques.length < 14) {
    //   alert('Les données ne sont pas suffisantes');
    //   return;
    // }
    // for (let i = 0; i < donneesNumeriques.length; i++) {
    //   const donee = donneesNumeriques[i];
    // }
    // let result = '';
    // switch (teteCommune) {
    //   case a:
    //     let cb=cp1;
    //     let cd=cp12;
    //     result = `ab=${a}`;
    //     break;
    //   default:
    //     break;
    // }
  }
}
