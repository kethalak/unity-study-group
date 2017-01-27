export var PasswordValidators = (function () {
    function PasswordValidators() {
    }
    PasswordValidators.complexPassword = function (formControl) {
        var minLength = 5;
        if (formControl.value == "")
            return null;
        if (formControl.value && formControl.value.length < minLength) {
            return { complexPassword: {
                    minLength: minLength,
                    currentLength: formControl.value.length
                }
            };
        }
        return null;
    };
    PasswordValidators.passwordsShouldMatch = function (formGroup) {
        var password = formGroup.get('password').value;
        var confirmPassword = formGroup.get('confirmPassword').value;
        if (password == '' || confirmPassword == '')
            return null;
        if (password != confirmPassword)
            return { passwordsShouldMatch: true };
    };
    return PasswordValidators;
}());
