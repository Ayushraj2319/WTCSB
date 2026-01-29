// (function show(){
//     console.log("Welcome to CSB");
// })();
// const show = () =>{
//     console.log('Welcome ');
// };
//show();
// (() => {
//     console.log("Welcome");
// })();
function person() {
    this.age=24;

    setTimeout(function (){
        console.log(this.age);
    },1000);
}
//node funew person();
function person() {
    this.age=24;

    setTimeout( ()=>{
        console.log(this.age);
    },1000);
}
new person();