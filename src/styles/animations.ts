import {
  animate,
  animation,
  AnimationTriggerMetadata,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeInOnEnter: AnimationTriggerMetadata = trigger('fadeInOnEnter', [
  transition(':enter', [
    style({ visibility: 'hidden' }),
    animation([
      animate(
        '500ms 0ms',
        keyframes([
          style({ visibility: 'visible', opacity: 0, easing: 'ease', offset: 0 }),
          style({ opacity: 1, easing: 'ease', offset: 1 }),
        ])
      ),
    ]),
  ]),
]);
