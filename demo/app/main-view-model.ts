import { Observable } from 'tns-core-modules/data/observable';
import  * as DetectRoot  from 'nativescript-detect-root';

export class HelloWorldModel extends Observable {
  public message: string;

  constructor() {
    super();
    this.message = "Cargando ..."
    if(!DetectRoot.isRooted()){
      this.message = "No esta rooteado";
    }else{
      this.message = "Esta rooteado";
    }

  }
}
