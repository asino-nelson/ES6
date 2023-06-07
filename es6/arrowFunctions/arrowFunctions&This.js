// using 'this' and arrow functions
// arrow functions do not re-bind "this"

const pet = {
    play(){
        var self = this
        setTimeout(function(){
            console.log('self', self);
        }, 1000);
    }
};

const pet2 = {
    play(){
        var self = this
        setTimeout(() => {
            console.log('this', this);
        }, 1000);
    }
};

console.log(pet.play());
console.log(pet2.play());

