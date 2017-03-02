import { Component, Input, Output, EventEmitter } from "@angular/core";
import { NgModel } from "@angular/forms";
export var PaginationDirective = (function () {
    function PaginationDirective(pageChangedNgModel) {
        this.pageChangedNgModel = pageChangedNgModel;
        this.pageChanged = new EventEmitter();
        this.pageList = [];
        this.pageChangedNgModel.valueAccessor = this;
    }
    PaginationDirective.prototype.ngOnChanges = function (changes) {
        this.doPaging();
    };
    PaginationDirective.prototype.doPaging = function () {
        this.pageList = [];
        var i, count;
        this.seletedPage = this.currentpage;
        var remaining = this.totalItems % this.pageSize;
        var totalSize = ((this.totalItems - remaining) / this.pageSize) + (remaining === 0 ? 0 : 1);
        for (i = (this.currentpage), count = 0; i <= totalSize && count < this.pageSize; i++, count++) {
            this.pageList.push(i);
        }
        //next validation
        if (i - 1 < totalSize) {
            this.nextItemValid = true;
            this.nextItem = i;
        }
        else {
            this.nextItemValid = false;
        }
        //previous validation
        if ((this.currentpage) > 1) {
            this.previousItemValid = true;
            this.previousItem = (this.currentpage * this.pageSize) - 1;
        }
        else {
            this.previousItemValid = false;
        }
    };
    PaginationDirective.prototype.setCurrentPage = function (pageNo) {
        this.seletedPage = pageNo;
        this.pageChangedNgModel.viewToModelUpdate(pageNo);
        this.pageChangeListener();
    };
    PaginationDirective.prototype.firstPage = function () {
        this.currentpage = 1;
        this.pageChangedNgModel.viewToModelUpdate(1);
        this.pageChangeListener();
        this.doPaging();
    };
    PaginationDirective.prototype.lastPage = function () {
        var totalPages = (this.totalItems / this.pageSize);
        var lastPage = (totalPages) - (totalPages % this.pageSize === 0 ? this.pageSize : totalPages % this.pageSize) + 1;
        this.currentpage = lastPage;
        this.pageChangedNgModel.viewToModelUpdate(lastPage);
        this.pageChangeListener();
        this.doPaging();
    };
    PaginationDirective.prototype.nextPage = function (pageNo) {
        this.currentpage = pageNo;
        this.pageChangedNgModel.viewToModelUpdate(pageNo);
        this.pageChangeListener();
        this.doPaging();
    };
    PaginationDirective.prototype.previousPage = function (pageNo) {
        var temp = pageNo - this.pageSize;
        this.currentpage = temp > 0 ? temp : 1;
        this.pageChangedNgModel.viewToModelUpdate(this.currentpage);
        this.pageChangeListener();
        this.doPaging();
    };
    PaginationDirective.prototype.writeValue = function (value) {
        if (!value && value != '0')
            return;
        this.setValue(value);
    };
    PaginationDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PaginationDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PaginationDirective.prototype.setValue = function (currentValue) {
        this.currentpage = currentValue;
        this.doPaging();
    };
    PaginationDirective.prototype.pageChangeListener = function () {
        this.pageChanged.emit({
            itemsPerPage: this.currentpage
        });
    };
    PaginationDirective.decorators = [
        { type: Component, args: [{
                    selector: 'ng-pagination[ngModel]',
                    template: "<div class= \"center\">\n              <ul class=\"pagination\" >\n                  <li *ngIf=\"previousItemValid && firstText\" (click)=\"firstPage()\"><a href=\"#\" [innerHTML]=\"firstText\">First</a></li>\n                  <li> <a *ngIf=\"previousItemValid\" (click)=\"previousPage(nextItem)\" aria-label=\"Previous\"> <span aria-hidden=\"true\">&laquo;</span> </a> </li>\n                  <li *ngFor=\"let pageNo of pageList\" [ngClass]=\"{'active':seletedPage === pageNo}\">\n                      <a (click)=\"setCurrentPage(pageNo)\">{{pageNo}}</a>\n                  </li>                \n                  <li> <a  *ngIf=\"nextItemValid\" (click)=\"nextPage(nextItem)\" aria-label=\"Next\"> <span aria-hidden=\"true\">&raquo;</span> </a> </li>\n                  <li><a *ngIf=\"nextItemValid && lastText\" (click)=\"lastPage()\" [innerHTML]=\"lastText\" >Last</a></li>\n                </ul>\n            </div>\n",
                    styles: ["\n  .center{\n    text-align: center;\n    display: block;\n    margin: 0 auto;\n    font-size: 1.5em;\n  }"]
                },] },
    ];
    /** @nocollapse */
    PaginationDirective.ctorParameters = [
        { type: NgModel, },
    ];
    PaginationDirective.propDecorators = {
        'previousText': [{ type: Input, args: ["previous-text",] },],
        'nextText': [{ type: Input, args: ["next-text",] },],
        'firstText': [{ type: Input, args: ["first-text",] },],
        'lastText': [{ type: Input, args: ["last-text",] },],
        'totalItems': [{ type: Input, args: ["totalItems",] },],
        'cPage': [{ type: Input, args: ["currentPage",] },],
        'pageSize': [{ type: Input, args: ["maxSize",] },],
        'boundaryLinks': [{ type: Input, args: ["boundaryLinks",] },],
        'pageChanged': [{ type: Output, args: ["pageChanged",] },],
    };
    return PaginationDirective;
}());
