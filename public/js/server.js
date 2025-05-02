// function sum(...args){
//     console.log(args[3]);
// }



// let res = sum(23,24,25,26);


let student = {
    FN : "hari",
    LN : "Pradap",
    get fullName(){
        return `${this.FN} ${this.LN}`
    },
    set fullName(val){
        let value = val
       console.log(val);99
    }
};


student.fullName = "surya prakash"

console.log(student.fullName);
