import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutompipe'
})
export class CutompipePipe implements PipeTransform {

  transform(lsname: string, Gender: string):string {

    if(Gender=="Female")
    {
  return 'Miss. '+lsname;
    }
    else
    {
    return 'Mrs. '+lsname;
    }
  }

}
