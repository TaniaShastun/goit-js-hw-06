import users from "./users.js";
//Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
  return users.filter(users => gender === users.gender);
};

console.log(getUsersWithGender(users, 'male')); 
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]