const p= new Promise((resolve, reject)=>{
    //You can perform asyn work
    setTimeout(()=>{
        reject(new Error('Medsdfdsssgae'))
        // resolve(1); 
    },2000);
});

p
.then((result)=> console.log('Resolved Promise', result))
.catch((error)=>console.log('Error', error.message));

// ***********************************************************//

// const user = getUser(1, function(user){
//     getGitHubRepository(user.githHubUserName, (users)=>{
//         getCommits(user, (commit)=>{
//             console.log(`List of Commits by User is ${commit}`);
//         })
//     })
// });
getUser(1)
    .then(user=>getGitHubRepository(user.githHubUserName))
    .then(()=>getCommits())
    .then((response)=>console.log('response', response))
    .catch((error)=>console.log(" I am First Catch"));

function getUser(id,){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Aside the async call');
            resolve({ id: id, githHubUserName:'Nikunj'});
        },
            2000);
    })
   
}

function getGitHubRepository(user){
    return new Promise((resolve, reject)=>{
        resolve(['repo1','repo2', 'repo3']);
    })
}

function getCommits(user){
    return new Promise((resolve, reject)=>{
        resolve('Response');
    })
}
