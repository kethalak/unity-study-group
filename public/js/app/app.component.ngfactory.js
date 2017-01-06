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
import * as import3 from './app.component';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './app.component.css.shim';
import * as import11 from './header.component';
import * as import12 from '@angular/router/src/directives/router_outlet';
import * as import13 from './header.component.ngfactory';
import * as import14 from '@angular/router/src/router';
import * as import15 from './auth/auth.service';
import * as import16 from '@angular/router/src/router_outlet_map';
import * as import17 from '@angular/core/src/linker/component_factory_resolver';
var renderType_AppComponent_Host = null;
var _View_AppComponent_Host0 = (function (_super) {
    __extends(_View_AppComponent_Host0, _super);
    function _View_AppComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent_Host0, renderType_AppComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('my-app', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AppComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AppComponent_0_4 = new import3.AppComponent();
        this._appEl_0.initComponent(this._AppComponent_0_4, [], compView_0);
        compView_0.create(this._AppComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.AppComponent) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_4;
        }
        return notFoundResult;
    };
    return _View_AppComponent_Host0;
}(import1.AppView));
function viewFactory_AppComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppComponent_Host === null)) {
        (renderType_AppComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_AppComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var AppComponentNgFactory = new import9.ComponentFactory('my-app', viewFactory_AppComponent_Host0, import3.AppComponent);
var styles_AppComponent = [import10.styles];
var renderType_AppComponent = null;
var _View_AppComponent0 = (function (_super) {
    __extends(_View_AppComponent0, _super);
    function _View_AppComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent0, renderType_AppComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '  ', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'app-header', null);
        this._appEl_1 = new import2.AppElement(1, null, this, this._el_1);
        var compView_1 = import13.viewFactory_HeaderComponent0(this.viewUtils, this.injector(1), this._appEl_1);
        this._HeaderComponent_1_4 = new import11.HeaderComponent(this.parentInjector.get(import14.Router), this.parentInjector.get(import15.AuthService));
        this._appEl_1.initComponent(this._HeaderComponent_1_4, [], compView_1);
        compView_1.create(this._HeaderComponent_1_4, [], null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this._el_3 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'container');
        this._text_4 = this.renderer.createText(this._el_3, '\n    ', null);
        this._el_5 = this.renderer.createElement(this._el_3, 'router-outlet', null);
        this._appEl_5 = new import2.AppElement(5, 3, this, this._el_5);
        this._RouterOutlet_5_5 = new import12.RouterOutlet(this.parentInjector.get(import16.RouterOutletMap), this._appEl_5.vcRef, this.parentInjector.get(import17.ComponentFactoryResolver), null);
        this._text_6 = this.renderer.createText(this._el_3, '\n  ', null);
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6
        ], [], []);
        return null;
    };
    _View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.HeaderComponent) && (1 === requestNodeIndex))) {
            return this._HeaderComponent_1_4;
        }
        if (((token === import12.RouterOutlet) && (5 === requestNodeIndex))) {
            return this._RouterOutlet_5_5;
        }
        return notFoundResult;
    };
    _View_AppComponent0.prototype.destroyInternal = function () {
        this._RouterOutlet_5_5.ngOnDestroy();
    };
    return _View_AppComponent0;
}(import1.AppView));
export function viewFactory_AppComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppComponent === null)) {
        (renderType_AppComponent = viewUtils.createRenderComponentType('C:/Users/ketha/Desktop/projects/web/unitystudygroup/assets/app/app.component.html', 0, import8.ViewEncapsulation.Emulated, styles_AppComponent, {}));
    }
    return new _View_AppComponent0(viewUtils, parentInjector, declarationEl);
}
