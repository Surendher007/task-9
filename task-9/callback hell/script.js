function operation1(callback) {
    setTimeout(function() {
        console.log("Operation 1 completed");
        callback();
    }, 1000);
}

function operation2(callback) {
    setTimeout(function() {
        console.log("Operation 2 completed");
        callback();
    }, 1500);
}

function operation3(callback) {
    setTimeout(function() {
        console.log("Operation 3 completed");
        callback();
    }, 2000);
}

function operation4(callback) {
    setTimeout(function() {
        console.log("Operation 4 completed");
        callback();
    }, 1000);
}

function start() {
    console.log("Starting operations...");
    operation1(function() {
        operation2(function() {
            operation3(function() {
                operation4(function() {
                    console.log("All operations completed");
                });
            });
        });
    });
}

start();