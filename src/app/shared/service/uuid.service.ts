import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UuidService {

  constructor() { 

  };

  // generateUUID() {
  //   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  //     const r = Math.random() * 16 | 0,
  //       v = c === 'x' ? r : (r & 0x3 | 0x8);
  //     return v.toString(16);
  //   });
  // }

  uuid(){
    const template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    const xAndYOnly = /[xy]/g;

    return template.replace(xAndYOnly, (character) => {
      const randomNo = Math.floor(Math.random()* 16);
      const newValue = character === 'x' ? randomNo : (randomNo & 0x3) |0x8;

      return newValue.toString(16);
    })
  }
}


