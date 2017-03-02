export var UsernameValidators = (function () {
    function UsernameValidators() {
    }
    UsernameValidators.shouldBeUnique = function (formControl) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (formControl.value == "roldan")
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 1000);
        });
    };
    UsernameValidators.cannotContainSpace = function (formControl) {
        if (formControl.value && formControl.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    };
    return UsernameValidators;
}());
