console.log("before");
getUser(1).then(res => {
  console.log(res);  

//promise 
//asyn/await
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Get user from database");
      resolve({ id: id, username: "helloworld" });
    }, 2000);
  });
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("get Repositories from database");
    callback([1, 2, 3]);
  }, 1000);
}
