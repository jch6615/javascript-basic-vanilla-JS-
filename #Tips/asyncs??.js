//Promise -> Async/await

//❌ Bad Code 💩
function displayUser() {
    fetchUser()//
        .then((user) => {
            fetchProfile(user) //
                .then((profile) => {
                    updateUI(user,profile);
                });
     });
}
//Promise??


//✅ Good Code ✨
async function dispayUser() {
    const user = await fetchUser();
    const profile = await fetchProfile(user);
    updateUI(user, profile);
}