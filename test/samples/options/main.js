import html from './template.pug';

assert.equal(html, '<form><input type="checkbox" #myVariable (click)="boom()" [foo]="bar" checked></form>');
