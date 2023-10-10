// Function to create a scoreboard for a team
function createScoreboard(teamName, container) {
    // Initialize the score for each team
    let score = 0;

    // Create an element to display the team name
    const teamNameElem = document.createElement("h1");
    teamNameElem.style.fontSize = "100px";
    teamNameElem.style.textTransform = "uppercase";
    teamNameElem.textContent = teamName;

    // Create a container for the team's scoreboard
    const teamBoard = document.createElement("div");
    teamBoard.className = "teamBoard";

    // Create an element to display the team's score
    const teamScore = document.createElement("h1");
    teamScore.style.fontSize = "250px";
    teamScore.textContent = score;

    // Create a button to increment the team's score
    const incrementBtn = document.createElement("button");
    incrementBtn.setAttribute("type", "button");
    incrementBtn.textContent = "+";
    incrementBtn.addEventListener("click", () => {
        score += 1;
        teamScore.textContent = score;
    });

    // Create a button to decrement the team's score
    const decrementBtn = document.createElement("button");
    decrementBtn.setAttribute("type", "button");
    decrementBtn.textContent = "-";
    decrementBtn.addEventListener("click", () => {
        if (score > 0) {
            score -= 1;
            teamScore.textContent = score;
        }
    });

    // Create a button to reset the team's score
    const resetBtn = document.createElement("button");
    resetBtn.setAttribute("type", "button");
    resetBtn.className = "resetBtn";
    resetBtn.textContent = "Reset score";
    resetBtn.addEventListener("click", () => {
        score = 0;
        teamScore.textContent = score;
    });

    // Append elements to the container
    container.appendChild(teamNameElem);
    container.appendChild(teamBoard);
    container.appendChild(resetBtn);
    teamBoard.appendChild(teamScore);
    teamBoard.appendChild(decrementBtn);
    teamBoard.appendChild(incrementBtn);
}

// Function to handle form submission
function submit() {
    // Get references to HTML elements
    const team_name = document.querySelector(".team_name"); //input field
    const team_cont = document.querySelector(".team_cont"); //team cont
    const teamA_Cont = document.getElementById("teamA_Cont"); //team A container
    const teamB_Cont = document.getElementById("teamB_Cont"); //team B container
    const teamA_Name = document.getElementById("teamA").value; //inputted team A name
    const teamB_Name = document.getElementById("teamB").value; //inputted team B name


    //display round and number
    const round_count = document.getElementById("round_count").value; //inputted round
    const round_cont = document.createElement("div"); // round container
    const round = document.createElement("h1");
    round.innerHTML = "Round";
    const round_Num = document.createElement("h1"); 
    round_Num.style.fontSize = "80px";
    round_cont.className = "round_count"; //for CSS
    round_Num.innerHTML = round_count; // inputted round value/number
    
    round_cont.appendChild(round);
    round_cont.appendChild(round_Num);

    // Check if team names are empty or same value
    if (teamA_Name === "" || teamB_Name === "") {
        alert("Enter team names.");
    } else if (teamA_Name === teamB_Name) {
        alert("Team names cannot be the same.");
    } else {
        // Check if round count is empty
        if (round_count === "") {
            round_cont.style.display = "none"; //if empty display none
        }
        team_cont.style.display = "grid"; //add css to team_cont display grid
        team_name.style.display = "none"; //after submitting hide/display:none the input field
        team_cont.appendChild(round_cont);

        // Create scoreboards for both teams
        createScoreboard(teamA_Name, teamA_Cont);
        createScoreboard(teamB_Name, teamB_Cont);
    }
}
