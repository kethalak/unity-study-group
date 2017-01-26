export var User = (function () {
    function User(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    return User;
}());
