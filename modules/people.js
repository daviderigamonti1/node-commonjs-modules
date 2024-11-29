const fullNameObj = require("./names");
const hobbiesObj = require("./hobbies");

function userInfo(firstName, lastName, hobbyOne, hobbyTwo, hobbyThree) {
    const fullName = fullNameObj(firstName, lastName);
    const hobbies = hobbiesObj(hobbyOne, hobbyTwo, hobbyThree);
    return {
        fullName: fullName.firstName + ' ' + fullName.lastName,
        hobbies: hobbies.hobbies
    };
}
module.exports = userInfo;
