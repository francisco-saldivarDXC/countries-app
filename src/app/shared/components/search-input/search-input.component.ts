import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-input',
  templateUrl: './search-input.component.html',
  styles: [
  ]
})
export class SearchInputComponent implements OnInit, OnDestroy {
  private debouncer : Subject<string> = new Subject<string>();
  private debouncerSubscription ?: Subscription;

  @Input()
  public placeholder : string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebouncer = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(500)
      )
      .subscribe( value => {
        this.onDebouncer.emit( value );
      })
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  public emitValue ( value : string ) {
    this.debouncer.next( value );
  }
}
