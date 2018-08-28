console.log('Before');

getUser(1, getRepository);

console.log('After');

function getRepository(user){
    getRepository(user.githHubUserName, getCommits);
}

function getCommits(repos){
    getCommits(repos, displayCommits);
}

function displayCommits(commits){
    console.log(`List of Commits by User is ${commit}`);
}

function getUser(id,getRepository){
    setTimeout(()=>{
        console.log('Aside the async call');
        getRepository({ id: id, githHubUserName:'Nikunj'});
    },
        2000);
}

function getRepository(user,getCommits){
    getCommits(['repo1','repo2', 'repo3']);
}

function getCommits(user,displayCommits){
    displayCommits(['Response']);
}
