console.log("before");
const user = getUser(1);
console.log("Go: user", user);
console.log("after");

//callback
//promise
//asyn/await
function getUser(id) {
  setTimeout(() => {
    console.log("Get user from database");
    return { id: id, username: "helloworld" };
  }, 2000);
}
