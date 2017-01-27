/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './spinner.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/common/src/directives/ng_if';
import * as import11 from '@angular/core/src/linker/template_ref';
var renderType_SpinnerComponent_Host = null;
var _View_SpinnerComponent_Host0 = (function (_super) {
    __extends(_View_SpinnerComponent_Host0, _super);
    function _View_SpinnerComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_SpinnerComponent_Host0, renderType_SpinnerComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_SpinnerComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('spinner', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_SpinnerComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._SpinnerComponent_0_4 = new import3.SpinnerComponent();
        this._appEl_0.initComponent(this._SpinnerComponent_0_4, [], compView_0);
        compView_0.create(this._SpinnerComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_SpinnerComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.SpinnerComponent) && (0 === requestNodeIndex))) {
            return this._SpinnerComponent_0_4;
        }
        return notFoundResult;
    };
    return _View_SpinnerComponent_Host0;
}(import1.AppView));
function viewFactory_SpinnerComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_SpinnerComponent_Host === null)) {
        (renderType_SpinnerComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_SpinnerComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var SpinnerComponentNgFactory = new import9.ComponentFactory('spinner', viewFactory_SpinnerComponent_Host0, import3.SpinnerComponent);
var styles_SpinnerComponent = [];
var renderType_SpinnerComponent = null;
var _View_SpinnerComponent0 = (function (_super) {
    __extends(_View_SpinnerComponent0, _super);
    function _View_SpinnerComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_SpinnerComponent0, renderType_SpinnerComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_SpinnerComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n    	', null);
        this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_1 = new import2.AppElement(1, null, this, this._anchor_1);
        this._TemplateRef_1_5 = new import11.TemplateRef_(this._appEl_1, viewFactory_SpinnerComponent1);
        this._NgIf_1_6 = new import10.NgIf(this._appEl_1.vcRef, this._TemplateRef_1_5);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._anchor_1,
            this._text_2
        ], [], []);
        return null;
    };
    _View_SpinnerComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (1 === requestNodeIndex))) {
            return this._TemplateRef_1_5;
        }
        if (((token === import10.NgIf) && (1 === requestNodeIndex))) {
            return this._NgIf_1_6;
        }
        return notFoundResult;
    };
    _View_SpinnerComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.visible;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgIf_1_6.ngIf = currVal_0;
            this._expr_0 = currVal_0;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_SpinnerComponent0;
}(import1.AppView));
export function viewFactory_SpinnerComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_SpinnerComponent === null)) {
        (renderType_SpinnerComponent = viewUtils.createRenderComponentType('C:/Users/ketha/Documents/projects/web/unitystudygroup/assets/app/shared/spinner.component.ts class SpinnerComponent - inline template', 0, import8.ViewEncapsulation.None, styles_SpinnerComponent, {}));
    }
    return new _View_SpinnerComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_SpinnerComponent1 = (function (_super) {
    __extends(_View_SpinnerComponent1, _super);
    function _View_SpinnerComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_SpinnerComponent1, renderType_SpinnerComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_SpinnerComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'i', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'fa fa-spinner fa-spin fa-3x');
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return null;
    };
    return _View_SpinnerComponent1;
}(import1.AppView));
function viewFactory_SpinnerComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_SpinnerComponent1(viewUtils, parentInjector, declarationEl);
}
