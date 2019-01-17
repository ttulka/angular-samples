import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[brRepeat]'
})
export class RepeatDirective {

  @Input() set brRepeat(count: number) {
    for (let i = 0; i < count; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }

}
