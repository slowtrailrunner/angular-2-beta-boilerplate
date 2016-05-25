import {Directive, ElementRef, OnInit, Renderer} from "angular2/core";
/**
 * Created by jasonholmberg on 5/25/16.
 */

@Directive({
    selector: '[myHighlight]'
})
export class HighlightDirective implements OnInit {
    private _defaultColor = 'green';
    private _elRef: ElementRef;
    private _renderer: Renderer;

    constructor(elRef: ElementRef, renderer: Renderer) {
        this._elRef = elRef;
        this._renderer = renderer;
    }

    ngOnInit():any {
        this._renderer.setElementStyle(this._elRef.nativeElement,'background-color',this._defaultColor);
    }
}