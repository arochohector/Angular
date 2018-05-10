import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})

export class InputFormatDirective {

  constructor(private el: ElementRef) { }

  @Input('appInputFormat') format: string;

  // @HostListener('focus') onFocus(){
  //   console.log("on focus");
  // }

  @HostListener('blur') onBlur(){

    let value: string = this.el.nativeElement.value;  // this gives access to the dom object value
    if(this.format == "phone")
      this.el.nativeElement.value = this.PhoneFormat(value);

      //this.el.nativeElement.value = value.toLowerCase();

  }

  PhoneFormat(value:string){
    if(value.length === 10)
      return "(" + value.substr(0,3) + ")" + " " + value.substr(3,3)+ "-" + value.substr(6, value.length);
    else
      return value;
  }
}
