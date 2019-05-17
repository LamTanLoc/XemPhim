import { Directive, ElementRef,Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private ele: ElementRef, private render2: Renderer2) {
    // this.ele.nativeElement.style.backgroundColor = "yellow";
    this.render2.setStyle(this.ele.nativeElement,'background-color','yellow');
   }

   @HostListener('mouseenter') SuKienHover(){
    this.render2.setStyle(this.ele.nativeElement,'background-color','gray');
   }
   @HostListener('mouseleave') SuKienLeave(){
    this.render2.setStyle(this.ele.nativeElement,'background-color','pink');
   }
   @HostBinding('style.backgroundColor') bgColor:string = 'red';



}
