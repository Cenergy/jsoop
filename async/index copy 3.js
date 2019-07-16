console.log("before");
getInfo();
console.log("after");
//asyn/await
async function getInfo() {
  const user = await getUser(1);
  console.log("Go: getInfo -> user", user);
  const abc = await getRepositories(1);
  console.log("Go: getInfo -> abc", abc);
}

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, username: "helloworld" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, rerject) => {
    setTimeout(() => {
      console.log("get Repositories from database");
      resolve([1, 2, 3]);
    }, 1000);
  });
}
