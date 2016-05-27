import {Directive, ElementRef, OnInit, Renderer} from "angular2/core";
/**
 * Created by jasonholmberg on 5/25/16.
 */

@Directive({
    selector: '[myHighlight]',
    inputs: ['highlightColor:myHighlight'],
    // acccess things connected to our host element
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class HighlightDirective  {
    private _defaultColor = 'green';
    private _elRef: ElementRef;
    private _renderer: Renderer;
    highlightColor: string;

    constructor(elRef: ElementRef, renderer: Renderer) {
        this._elRef = elRef;
        this._renderer = renderer;
    }

    // ngOnInit():any {
    //     this._renderer.setElementStyle(this._elRef.nativeElement,'background-color', this.highlightColor || this._defaultColor);
    // }

    onMouseEnter() {
        this.highlight(this.highlightColor || this._defaultColor);
    }

    onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this._renderer.setElementStyle(this._elRef.nativeElement,'background-color', color);
    }
}