import { Injectable } from '@angular/core';

@Injectable()

export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        name:  'Clean Code',
        author:  'robert c martin',
        image:  "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
        amount: 700
      },
      {
        name: 'Pragmatic Programmer',
        author: 'david thomas',
        image:  'https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20_hu7d9a813cf46675dfb7b1bf4930cee733_2802494_750x0_resize_q75_box.jpg',
        amount: 800
      },
      {
        name: 'Art of Computer Programming',
        author: 'donald john fuller',
        image:  'https://m.media-amazon.com/images/I/410vJZbAZGS._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        amount: 18300
      },
      {
        name: 'Introduction To Algorithms',
        author: 't cormen',
        image:  'https://m.media-amazon.com/images/I/61Pgdn8Ys-L._AC_UY545_QL65_.jpg',
        amount: 1500
      }
    ];
  }

}
