import { Component, Input } from '@angular/core';
export var SpinnerComponent = (function () {
    function SpinnerComponent() {
        this.visible = true;
    }
    SpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'spinner',
                    template: "\n    \t<i *ngIf=\"visible\" class=\"fa fa-spinner fa-spin fa-3x\"></i>\n    "
                },] },
    ];
    /** @nocollapse */
    SpinnerComponent.ctorParameters = [];
    SpinnerComponent.propDecorators = {
        'visible': [{ type: Input },],
    };
    return SpinnerComponent;
}());
