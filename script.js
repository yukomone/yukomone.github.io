fetch('https://api.github.com/users/yukomone')
    .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
        return response.json();
    })
    .then(data => {
        const login = data.login;
        const avatarUrl = data.avatar_url;
        const gravatarId = data.gravatar_id;
        const url = data.url;
        const htmlUrl = data.html_url;
        const reposUrl = data.repos_url;
        const name = data.name;
        const location = data.location;
        const bio = data.bio;

        document.querySelector('#profile-pic').src = avatarUrl;
        document.querySelector('#profile__info--username a').innerHTML = login;
        document.querySelector('#profile__info--username a').href = htmlUrl;
        document.querySelector('#profile__info--name').innerHTML = name;
        document.querySelector('#profile__info--location').innerHTML = location;
        //document.querySelector('#profile__info--bio').innerHTML = bio;
        document.querySelector('#favicon').href = avatarUrl;
    })
    .catch(error => {
        console.error('Error: ', error);
    });