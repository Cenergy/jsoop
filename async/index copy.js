console.log("before");
const user = getUser(1, user => {
  getRepositories(user, repos => {
    repos.map(repo => {
      console.log(repo);
    });
  });
});
console.log("after");

//callback

//promise
//asyn/await
function getUser(id, callback) {
  setTimeout(() => {
    console.log("Get user from database");
    callback({ id: id, username: "helloworld" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("get Repositories from database");
    callback([1, 2, 3]);
  }, 1000);
}
