import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputCustomDirective]'
})
export class InputCustomDirectiveDirective {
  @Input('format') format;
  @Input('appInputCustomDirective') format1;
  //ElementRed is seevice defined in angular, that give access to DOM object
  constructor(private el:ElementRef) { 
  }

  // @HostListener('focus') onFocus(){
  //   console.log('focused');
  // }

  @HostListener('blur') onBlur(){
    let value:string = this.el.nativeElement.value;
    if(this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
    this.el.nativeElement.value = value.toUpperCase();
      
    console.log('blurred');
  }


}
