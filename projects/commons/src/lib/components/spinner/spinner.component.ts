import { Component, Input, OnInit } from '@angular/core';

type SpinnerSize = 'lg' | 'xl' | 'xxl'

@Component({
  selector: 'lib-spinner',
  template: `<div class="gg-spinner" [class]="size"></div>`,
  styles: [`
    .gg-spinner {
  transform: scale(var(--ggs, 1));
}
.lg {
  transform: scale(var(--ggs, 2));
}
.xl {
  transform: scale(var(--ggs, 3));
}
.xxl {
  transform: scale(var(--ggs, 4));
}
.gg-spinner,
.gg-spinner::after,
.gg-spinner::before {
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
}
.gg-spinner::after,
.gg-spinner::before {
  content: '';
  position: absolute;
  border-radius: 100px;
}
.gg-spinner::before {
  animation: spinner 1s cubic-bezier(0.6, 0, 0.4, 1) infinite;
  border: 3px solid transparent;
  border-top-color: currentColor;
}
.gg-spinner::after {
  border: 3px solid;
  opacity: 0.2;
}
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
  `]
})
export class SpinnerComponent implements OnInit {
    @Input() size: SpinnerSize = 'lg'
  constructor() { }

  ngOnInit(): void {
  }

}