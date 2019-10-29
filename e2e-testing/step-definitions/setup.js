const {setDefinitionFunctionWrapper} = require('cucumber');

setDefinitionFunctionWrapper(function (fn) {
    //this is just an example
    if (true) {//you want to do before and after step stuff
        return async function () {
            console.info("before test");
            //do before step stuff
            await fn.apply(this, arguments);
            //do after step stuff
            console.info("after test");
        }
    } else {//just want to run the step
        return fn;
    }
});