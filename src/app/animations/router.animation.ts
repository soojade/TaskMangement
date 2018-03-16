import { trigger, state, transition, style, animate } from '@angular/animations';
import { group } from '@angular/core';

export const slideToRight = trigger('routeAnimation', [
    state('void', style({ 'width': '100%', 'height': '100%' })),
    state('*', style({ 'width': '100%', 'height': '100%' })),
    transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        group([
            animate('.5s ease-in-out', style({ transform: 'translateX(0)' })),
            animate('.3s ease-in', style({ opacity: 1 })),
        ])
    ]),
    transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        group([
            animate('.5s ease-in-out', style({ transform: 'translateX(100%)' })),
            animate('.3s ease-in', style({ opacity: 0 })),
        ])
    ]),
]);