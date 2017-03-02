export var PreventUnsavedChangesGuard = (function () {
    function PreventUnsavedChangesGuard() {
    }
    PreventUnsavedChangesGuard.prototype.canDeactivate = function (component) {
        if (component.form.dirty)
            return confirm('You have unsaved changes. Are you sure you want to navigate away?');
        return true;
    };
    return PreventUnsavedChangesGuard;
}());
