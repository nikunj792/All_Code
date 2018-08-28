console.log('Before');

//This is an expample of CALLBACK HELL.
const user = getUser(1, function(user){
    getGitHubRepository(user.githHubUserName, (users)=>{
        getCommits(user, (commit)=>{
            console.log(`List of Commits by User is ${commit}`);
        })
    })
});
console.log('After');

function getUser(id,callback){
    setTimeout(()=>{
        console.log('Aside the async call');
        callback({ id: id, githHubUserName:'Nikunj'});
    },
        2000);
}

function getGitHubRepository(user,callback){
    callback(['repo1','repo2', 'repo3']);
}

function getCommits(user,callback){
    callback(['Response']);
}
