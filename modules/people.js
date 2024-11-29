const fullNameObj = require("./names");
const hobbiesObj = require("./hobbies");

function userInfo() {
    const fullName = fullNameObj('Mario', 'Rossi');
    const hobbies = hobbiesObj('Reading', 'Swimming', 'Cycling');
    return {
        fullName: fullName.firstName + ' ' + fullName.lastName,
        hobbies: hobbies.hobbies
    };
}
module.exports = userInfo;
