const promiseWifeBringingTicket = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
})
promiseWifeBringingTicket.then((t) => {
    console.log(`person3: shows ${t}`);
})
const getPopcorn = promiseWifeBringingTicket.then((t) =>{

    console.log('wife: i have the tickets');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve , reject) => {
        resolve(`${t} popcorn`)
    })
})

const getButter = getPopcorn.then((t)=>{
    
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');
    return new Promise((resolve , reject) => {
        resolve(`${t} butter`)
    })
})

const getColdDrinks =  getButter.then(()=>{
    console.log('wife: i want some coldDrinks');
    console.log('husband: OK');
    return new Promise((resolve , reject) => {
        resolve(`${t} coldDrinks`)
    })
})

getButter.then((t) => {
    console.log(t);
})

function createPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST'});
            resolve()
        }, 3000)
    }) 
}
function deletePost(){
    //complete this function
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.pop();
            resolve()
        }, 1000)
    }) 
}
async function editPosts(){
    await createPost();
    await deletePost();
}