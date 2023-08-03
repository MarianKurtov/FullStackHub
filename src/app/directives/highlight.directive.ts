import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {

  @Input() color = 'green';

  @Input() isHighLighted = false;

  constructor(
    private render: Renderer2,
    private elementRef: ElementRef
  ) { }

  highLight(): void {
    this.render.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      this.isHighLighted ? this.color : 'inherit'
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.highLight();
  }
}
