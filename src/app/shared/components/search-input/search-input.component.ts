import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-input',
  templateUrl: './search-input.component.html',
  styles: [
  ]
})
export class SearchInputComponent {
  @Input()
  public placeholder : string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  public emitValue ( value : string ) {
    this.onValue.emit( value );
  }
}
