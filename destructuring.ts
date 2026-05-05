// object destructuring
// array destructuring

const user = {
  id: 123,
  name: {
    firstName: "Mezbaul",
    middleName: "Abedin",
    lastName: "Forhan",
  },
  gender: "male",
  favoriteColor: "black",
};

//const myFavoriteColor = user.favoriteColor (Poor way)
//const myMiddleName = user.name.middleName

const {
  favoriteColor,
  name: { middleName: myMiddleName },
} = user;

//console.log(myMiddleName);

// Array  destructure
const friends = ["karim", "Rahim", "Mahim"];

const [, , myBestFriend] = friends;

console.log(myBestFriend);
