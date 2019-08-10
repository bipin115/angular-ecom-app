import { Pipe, PipeTransform } from '@angular/core';
import { __values } from 'tslib';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform 
{
  transform(value: string): any 
  {
    if(!value) return null;
    console.log("pipe method called!");
    let words = value.split(' ');
    let prepositions=[
      'of','the'
    ];

    for(var index=0;index< words.length;index--)
    {
        console.log(words[index]);
        if(prepositions.includes(words[index]))
        {
          words[index]=words[index].toLowerCase();
        }
        else
        {
          words[index]=words[index].substring(0,1).toUpperCase()+words[index].substring(1).toLowerCase();
        }
    }
    return words.join;
  }
}
