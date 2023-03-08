// 1) Creating a new array of object with teams informations
// 2) Print on console for each member the relative informations, includings photo like a string
// 3) Print the same info on DOM like strings

// 4) Edit the string "photo" in an image
// 5) Treat each member like a card


const mainContainer = document.getElementById("main-container");
const teamList = document.createElement("ul");
const teamMember = document.createElement("li");
mainContainer.append(teamList);
teamList.append(teamMember);



const ourTeam = [
    {
        name: "Wayne",
        surname: "Barnett",
        mansion: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela",
        surname: "Caroll",
        mansion: "Chief Editor",
        photo:  "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter",
        surname: "Gordon",
        mansion: "Office Manager",
        photo:  " walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela",
        surname: "Lopez",
        mansion: "Social Media Manager",
        photo:  "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott",
        surname: "Estrada",
        mansion: "Developer",
        photo:  "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara",
        surname: "Ramos",
        mansion: "Graphic Designer",
        photo:  "barbara-ramos-graphic-designer.jpg"
    }
];


for(let i = 0; i < ourTeam.length; i++) {
    console.log(`Member Name: ${ourTeam[i].name}`)
    console.log(`Member Surname: ${ourTeam[i].surname}`)
    console.log(`Member Mansion: ${ourTeam[i].mansion}`)
    console.log(`Member photo: ${ourTeam[i].photo}`)
}




