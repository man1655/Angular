import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter',
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    if (args.length > 0) {
      const rate = args[0];
      return value * rate;
    }
    return value*40;
  }

}
