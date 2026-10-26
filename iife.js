//named IIFE

(function one(){
    console.log(`DB CONNECTED`);
})();


//unname , simple , parameter pass

((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('xyz')