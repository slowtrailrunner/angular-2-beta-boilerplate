import {Directive, TemplateRef, ViewContainerRef} from "angular2/core";
/**
 * Created by jasonholmberg on 5/27/16.
 */

@Directive({
    selector: '[myUnless]',
    inputs: ['myUnless']
})
export class UnlessDirective {
    constructor(
        // Test between the element tags where we applied the directive
        private _templateRef: TemplateRef,
        // The place where we want to insert into our document
        private _viewContainer: ViewContainerRef
    ) {}

    set myUnless(condition: boolean) {
        if (!condition) {
            this._viewContainer.createEmbeddedView(this._templateRef)
        } else {
            this._viewContainer.clear();
        }
    }
}
