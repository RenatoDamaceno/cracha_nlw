const LinksSocialMedia ={
  github:'renatodamaceno',
  youtube:'renatooliveira',
  facebook:'renato.damaceno',
  instagram: 'renato_damaceno',
  twitter: 'damacenorenato'
}

function changeSocialMediaLinks() {
  for (let li of changeSocialMediaLinks.children) {
    const social = li.getAttribute ('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMidia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    UserImage.src = data.avatar_url
    userLink.textContent = data.login
  })
}

getGitHubProfileInfos()

