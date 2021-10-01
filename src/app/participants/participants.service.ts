import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  getParticipants(){
      return [
          {name: "Yeon Sue", age:20 + " years old", gender: "Female"},
          {name: "Kang So Bong", age:22 + " years old", gender: "Female"},
          {name: "Nam Sin", age:24 + " years old", gender: "Male"},
          {name: "Kim Dan", age:23 + " years old", gender: "Male"},
          {name: "Jungkook", age:26 + " years old", gender: "Male"},
          {name: "Yu Ji", age:27 + " years old", gender: "Female"},
          {name: "Vicki_vn", age:30 + " years old", gender: "Female"},
          {name: "Thanly", age:29 + " years old", gender: "Female"},
          {name: "Oshii", age:19 + " years old", gender: "Male"},
          {name: "Le Khoa", age:35 + " years old", gender: "Male"},
          {name: "Cangine", age:32 + " years old", gender: "Male"},
      ];
  }
}
