postSignUp = function(userId, info) {
    // takes in userId and info
    console.log(userId);
    console.log(info.profile.profession);
    Roles.addUsersToRoles(userId, ['normal-user', info.profile.profession])
        // will signup the person as a normal user and the profession
};

AccountsTemplates.configure({
    postSignUpHook: postSignUp //only runs on the server
}); //takes in an object