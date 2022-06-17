// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
let container = document.querySelector(".team-container");
let button = document.querySelector("#addMemberButton");
// creo un array di oggetti che contiene NamedNodeMap,ruolo e immagine
let teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "SMM",
        photo: "img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "img/scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "img/barbara-ramos-graphic-designer.jpg"
    }
]
// chiamo la funzione members membersGeneration

// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.

function membersGeneration(){
    // scorro con un ciclo for l'array di oggetti
    for(let i = 0; i < teamMembers.length; i++){
        // newCard contiene il codice HTML che andrò ad inserire nel file index.html
        let newCard = 
        `<div class="team-card">
                <div class="card-image">
                    <img src="${teamMembers[i].photo}">
                </div>
                <div class="card-text">
                    <h3>${teamMembers[i].name}</h3>
                    <p>${teamMembers[i].role}</p>
                </div>
            </div>`
            // inserisco nel file HTML il contenuto di newcard
        container.innerHTML += newCard;
    }
}

button.addEventListener("click", function(){
    // le variabili name role e image contengono i dati inseriti nel form
    let name = document.querySelector("#name").value;
    let role = document.querySelector("#role").value;
    let image = document.querySelector("#image").value;
    // inserisco i dati dal form in un oggetto
    let newTeamMember = {
        name: name,
        role: role,
        photo: `img/${image}"`
    }
    // pusho l'oggetto nell'array
    teamMembers.push(newTeamMember);
    // clearo la sezione che contiene tutte le cards del team
    container.innerHTML = "";
    // chiamo la funzione membersGeneration per reinserire tutte le vecchie cards più quella nuova
    membersGeneration();
})