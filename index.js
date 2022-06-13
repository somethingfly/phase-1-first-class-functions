function receivesAFunction(callback) {
    callback();
    return;
}

function returnsANamedFunction() {
    function namedFunction () {
        console.log("I am named function");
        return;
    }
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("I am an anonymous function");
        return;
    }
}