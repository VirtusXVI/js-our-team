// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.




// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
let container = document.querySelector(".team-container");
let button = document.querySelector("#addMemberButton");

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
membersGeneration();

// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.

function membersGeneration(){
    for(let i = 0; i < teamMembers.length; i++){
        let newCard = 
        `<div class="team-card">
                <div class="card-image">
                    <img src="${teamMembers[i].photo}"/>
                </div>
                <div class="card-text">
                    <h3>${teamMembers[i].name}</h3>
                    <p>${teamMembers[i].role}</p>
                </div>
            </div>`
        container.innerHTML += newCard;
    }
}
button.addEventListener("click", function(){
    let name = document.querySelector("#name").value;
    let role = document.querySelector("#role").value;
    let image = document.querySelector("#image").value;
    console.log(name,role,image);
    let newTeamMember = {
        name: name,
        role: role,
        image: `<img src="img/${image}"/>`
    }
    teamMembers.push(newTeamMember);
    container.innerHTML = "";
    membersGeneration();
})