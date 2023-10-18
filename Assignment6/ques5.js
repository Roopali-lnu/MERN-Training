setTimeout(() => console.log("I am a setTimeout func"), 0);
function a(x) {
    console.log("a called");
    x();
}
const b = () => {
    console.log("b called");
}
a(b);


/*
a called
b called
I am a setTimeout func
.
*/