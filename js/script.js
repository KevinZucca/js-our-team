// 1) Creating a new array of object with teams informations
// 2) Print on console for each member the relative informations, includings photo like a string
// 3) Print the same info on DOM like strings

// 4) Edit the string "photo" in an image
// 5) Treat each member like a card


const mainContainer = document.getElementById("main-container");
const teamList = document.createElement("ul");
mainContainer.append(teamList);





const ourTeam = [
    {
        name: "Wayne",
        surname: "Barnett",
        mansion: "Founder & CEO",
        photo: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela",
        surname: "Caroll",
        mansion: "Chief Editor",
        photo:  "img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter",
        surname: "Gordon",
        mansion: "Office Manager",
        photo:  "img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela",
        surname: "Lopez",
        mansion: "Social Media Manager",
        photo:  "img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott",
        surname: "Estrada",
        mansion: "Developer",
        photo:  "img/scott-estrada-developer.jpg"
    },
    {
        name: "Barbara",
        surname: "Ramos",
        mansion: "Graphic Designer",
        photo:  "img/barbara-ramos-graphic-designer.jpg"
    }
];


    let listsOfMemebers = generateMember();

//---------------- FUNCTIONS ------------------------------------------

function generateMember () {
   
    for(let i = 0; i < ourTeam.length; i++) {
        //create a new div every time
        let teamMemberCard = document.createElement("div");
        teamMemberCard.classList.add("card");
        //put inside the div the informations about the member of the team
        let teamMemberPhoto = document.createElement("img");
        teamMemberPhoto.src = ourTeam[i].photo;
        teamMemberPhoto.classList.add("card-picture");
        teamMemberCard.append(teamMemberPhoto);

        let teamMemberName = document.createElement("p");
        teamMemberName.textContent = "ciao"

        // `<img src="${ourTeam[i].photo}">
        // <p>${ourTeam[i].name} ${ourTeam[i].surname}</p>
        // <p>${ourTeam[i].mansion}</p>`

        //append the member of the team (every div) to the container
        mainContainer.append(teamMember)
        console.log (teamMember)
        
    }
}





