import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter2'
})
export class Filter2Pipe implements PipeTransform {

  transform(value: any[] | null, phrase: string): any | null {
    if (!value || !phrase) {
      return value;
    }

    phrase = phrase.toLowerCase();

    return value.filter( item => {
      const jsonItem: string = JSON.stringify(item).toLowerCase()
        .replace(/"[^"]*"\:/g, '')
        .replace(/[",\{\}]/g, '');
      return jsonItem.includes(phrase);
    });
  }

}
