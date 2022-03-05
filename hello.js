const {spawn }=require('child_process');
//const childPython=spawn('python',['--version']);   
const childPython=spawn('python',['Recommenders.py','get_item_users()']);

childPython.stdout.on('data', (data) =>{
console.log(`stdout:${data}`);
});
childPython.stderr.on('data',(data)=>{
    console.error(`stderr:${data}`)
}); 
childPython.on('close',(code)=>{
    console.log(`chiled procees exited with code ${code}`)
});
