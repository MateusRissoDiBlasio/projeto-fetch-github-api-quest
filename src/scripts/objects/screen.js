const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                            <img src="${user.avatarUrl}" alt="foto do perfil do usuário" />
                                <div class="data">
                                    <h1>${user.name ?? 'Não possui nome cadastrado 😥 '}</h1> 
                                    <p>${user.bio ?? 'Não possui bio cadastrada 😥 '}<p>
                                    <br>
                                    <p><i class="fas fa-users"></i>Seguidores: ${user.followers}<p>
                                    <p><img src="./src/icons/following.svg" class="icons"></img>Seguindo: ${user.following}<p>
                                </div>
                            </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => { repositoriesItens += `<li> <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                                                                    <div class="repo-info">
                                                                        <p><i class="fas fa-code-branch"></i>${repo.forks_count}</p>
                                                                        <p><i class="far fa-star"></i>${repo.stargazers_count}</p>
                                                                        <p><i class="fas fa-binoculars"></i>${repo.watchers}</p>
                                                                        <p><i class="fas fa-code"></i>${repo.language ?? 'Não informado'}</p>
                                                                    </div>
                                                                </li>`});
        
        if(user.repositories.length > 0){
            this.userProfile.innerHTML +=   `<div class="repositories section" 
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }
        
        let eventItens = ''
        
        user.events.forEach(element => {   
            
            if (element.type === "PushEvent"){
                eventItens +=   `<li>
                                    <a>${element.repo.name}</a><p>-</p><p>${element.payload.commits[0].message}</p>
                                </li>`}      
    
            else if (element.type === "CreateEvent"){
                eventItens +=   `<li>
                                    <a>${element.repo.name}</a><p>-</p><p>Create Event</p>
                                </li>`
                            }
                                
                            }
)
    
        if(user.events.length > 0){
            this.userProfile.innerHTML +=   `<div class="events section" 
                                                <h2>Eventos</h2>
                                                <ul>${eventItens}</ul>
                                            </div>`
        }},
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
};



export { screen }
