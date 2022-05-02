

const pipe=(...fns)=>(val)=>fns.reduce((prev,fn)=>fn(prev),val);
const piperesult=pipe(subtract1,multiplyby5)(5);
console.log(piperesult);



