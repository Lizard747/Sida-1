function changeTextHome() {
  const targetDiv = document.getElementById("gameSection");
  const background = document.getElementById("background");

  if (background) {
    background.classList.remove("hidden");
  }

  if (targetDiv) {
    targetDiv.innerHTML = `
    <div class="card-container" style="margin-top: 7%;">
    <div class="w3-card w3-hover-shadow w3-padding-64 w3-center" onclick="changeTextAction()" style="background-color: #e74c3c;">Action</div>
    <div class="w3-card w3-hover-shadow w3-padding-64 w3-center" onclick="changeTextAdventure()" style="background-color: #f39c12;">Adventure</div>
    <div class="w3-card w3-hover-shadow w3-padding-64 w3-center" style="background-color: #5c6bc0;">RPG</div>
  </div>
  <div class="card-container">
    <div class="w3-card w3-hover-shadow w3-padding-64 w3-center" style="background-color: #3498db;">Shooter</div>
    <div class="w3-card w3-hover-shadow w3-padding-64 w3-center" style="background-color: #e67e22;">Strategy</div>
    <div class="w3-card w3-hover-shadow w3-padding-64 w3-center" style="background-color: #ecf0f1; color: #333;">Simulation</div>
  </div>
  <div class="card-container">
    <div class="w3-card w3-hover-shadow w3-padding-64 w3-center" style="background-color: #e91e63;">Fighting</div>
    <div class="w3-card w3-hover-shadow w3-padding-64 w3-center" style="background-color: #cddc39;">Racing</div>
    <div class="w3-card w3-hover-shadow w3-padding-64 w3-center" style="background-color: #9c27b0;">Puzzle</div>
  </div>
  <div class="card-container">
    <div class="w3-card w3-hover-shadow w3-padding-64 w3-center" style="background-color: #009688;">MMO</div>
    <div class="w3-card w3-hover-shadow w3-padding-64 w3-center" style="background-color: #fdd835;">Platformer</div>
    <div class="w3-card w3-hover-shadow w3-padding-64 w3-center" style="background-color: #616161; color: white;">Stealth</div>
  </div>
  <div class="card-container" style="margin-bottom: 7%;">
    <div class="w3-card w3-hover-shadow w3-padding-64 w3-center" style="background-color: #000; color: white;">Horror</div>
    <div class="w3-card w3-hover-shadow w3-padding-64 w3-center" style="background-color: #00bcd4;">Sports</div>
    <div class="w3-card w3-hover-shadow w3-padding-64 w3-center" style="background-color: #795548;">Sandbox</div>
  </div>
    `;
  } else {
    console.error("Div with ID 'gameSection' not found.");
  }
}
function showShopPage({ title, price, releaseDate, rating }) {
  const gameSection = document.getElementById("gameSection");
  const background = document.getElementById("background");

  if (background) {
    background.classList.add("hidden");
  }

  if (!gameSection) return;

  let extraImageHTML = "";
  if (title === "Shadow Rebellion") {
    extraImageHTML = `
      <img src="ShadowRebellion.webp" alt="Shadow Rebellion Image" style="width: 100%; margin-top: 2rem; border-radius: 10px;">
    `;
  }
  

  if (title === "Urban Fury") {
    extraImageHTML = `
      <img src="UrbanFury.webp" alt="Shadow Rebellion Image" style="width: 100%; margin-top: 2rem; border-radius: 10px;">
    `;
  }
  if (title === "Zero Protocol") {
    extraImageHTML = `
      <img src="ZeroProtocol.webp" alt="Zero Protocol Image" style="width: 100%; margin-top: 2rem; border-radius: 10px;">
    `;
  }
  if(title === "Blade Rush"){
    extraImageHTML = `
    <img src="BladeRush.WEBP" alt="Zero Protocol Image" style="width: 100%; margin-top: 2rem; border-radius: 10px;">
    `;  
  }
  gameSection.innerHTML = `
    <div class="shop-page" style="font-family: Arial; padding: 2rem; position: relative; top: 5rem; max-width: 600px; margin: auto;">
      <h1 style="font-size: 2rem; margin-bottom: 1rem;">${title}</h1>
      ${extraImageHTML}      
      <p style="font-size: 1.2rem;"><strong>Price:</strong> ${price}</p>
      <p style="font-size: 1.2rem;"><strong>Release Date:</strong> ${releaseDate}</p>
      <p style="font-size: 1.2rem;"><strong>Rating:</strong> ${rating}</p>
      <button style="margin-top: 2rem; padding: 0.5rem 1rem; font-size: 1rem; cursor: pointer; margin-bottom: 15rem;">Buy Now</button>      
    </div>
  `;
}
  
    
document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", function (event) {
    const card = event.target.closest(".game-card");
    if (!card) return;


    const background = document.getElementById("background");
    if (background) {
      background.classList.add("hidden");
    }

    const title = card.querySelector(".game-title")?.textContent.trim();
    const infoSpans = card.querySelectorAll(".game-info span");

    const price = infoSpans[0]?.textContent.trim();
    const releaseDate = infoSpans[1]?.textContent.replace("Released: ", "").trim();
    const rating = infoSpans[2]?.textContent.trim();

    const gameData = {
      title,
      price,
      releaseDate,
      rating
    };

    showShopPage(gameData);
    console.log(gameData);
  });
});

    
function changeTextAction() {
  const targetDiv = document.getElementById("gameSection");
  const background = document.getElementById("background");

  if (background) {
    background.classList.remove("hidden");
  }

  if (targetDiv) {
    targetDiv.innerHTML = `
      <div class="game-list" style="margin-top: 10%;">
        <div class="game-card" title="A stealth-based action game where you lead a rebellion in a dystopian past.">
          <h2 class="game-title">Shadow Rebellion</h2>
          <div class="game-info">
            <span>$59.99</span>
            <span>Released: May 5, 2025</span>
            <span>4.5 / 5</span>
          </div>
        </div>

        <div class="game-card" title="Fast-paced street racing and combat in a gritty urban environment.">
          <h2 class="game-title">Urban Fury</h2>
          <div class="game-info">
            <span>$39.99</span>
            <span>Released: February 15, 2024</span>
            <span>4.3 / 5</span>
          </div>
        </div>

        <div class="game-card" title="Sci-fi shooter with tactical missions and a gripping storyline.">
          <h2 class="game-title">Zero Protocol</h2>
          <div class="game-info">
            <span>$49.99</span>
            <span>Released: October 10, 2023</span>
            <span>4.7 / 5</span>
          </div>
        </div>

        <div class="game-card" title="High-speed hack-and-slash adventure with parkour combat.">
          <h2 class="game-title">Blade Rush</h2>
          <div class="game-info">
            <span>$34.99</span>
            <span>Released: July 8, 2022</span>
            <span>4.4 / 5</span>
          </div>
        </div>

        <div class="game-card" title="Military FPS with a deep narrative and team-based objectives.">
          <h2 class="game-title">Crimson Strike</h2>
          <div class="game-info">
            <span>$54.99</span>
            <span>Released: March 18, 2025</span>
            <span>4.6 / 5</span>
          </div>
        </div>

        <div class="game-card" title="Futuristic warfare in a world shaped by sound-based technology.">
          <h2 class="game-title">Echo Warfare</h2>
          <div class="game-info">
            <span>$44.99</span>
            <span>Released: December 1, 2023</span>
            <span>4.1 / 5</span>
          </div>
        </div>
      </div>
    `;
  }
}

function changeTextAdventure() {
  const targetDiv = document.getElementById("gameSection");
  if (targetDiv) {
    targetDiv.innerHTML = `
    <div class="game-list" style="margin-top: 10%;">
    <div class="game-card">
      <h2 class="game-title">Urban Furry</h2>
      <div class="game-info">
        <span>$1000.69</span>
        <span>Released: May 10, 1893</span>
        <span>5 / 5</span>
      </div>
    </div>
  
    <div class="game-card">
      <h2 class="game-title">Urban Furry2 global offencive</h2>
      <div class="game-info">
        <span>$1</span>
        <span>Released: February 15, 239 BC </span>
        <span>2 / 5</span>
      </div>
    </div>
  
    <div class="game-card">
      <h2 class="game-title">Hit the Tower 1</h2>
      <div class="game-info">
        <span>$60.99</span>
        <span>Released: September 11, 2001, 8:46 am</span>
        <span>9 / 11</span>
      </div>
    </div>
  
    <div class="game-card">
      <h2 class="game-title">Hit the Tower 2</h2>
      <div class="game-info">
        <span>$34.99</span>
        <span>Released: September, 11, 2001, 9:03 am </span>
        <span>9 / 11</span>
      </div>
    </div>
  
    <div class="game-card">
      <h2 class="game-title">Trump the rump 2</h2>
      <div class="game-info">
        <span>$5.5</span>
        <span>Released: June 14, 1946</span>
        <span>4.6 / 5</span>
      </div>
    </div>
  
    <div class="game-card">
      <h2 class="game-title">Cotton farm sim</h2>
      <div class="game-info">
        <span>$1200</span>
        <span>Released: December 1, 1700</span>
        <span>4.1 / 5</span>
      </div>
    </div>
  </div>`
  
  ;
}
}
function openModal() {
    document.getElementById('loginModal').style.display = 'flex';
  }
  
  function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
  }
  
  function showTab(tab) {
    if (tab === 'login') {
      document.getElementById('loginForm').style.display = 'block';
      document.getElementById('registerForm').style.display = 'none';
      document.getElementById('loginTab').classList.add('active');
      document.getElementById('registerTab').classList.remove('active');
    } else {
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('registerForm').style.display = 'block';
      document.getElementById('registerTab').classList.add('active');
      document.getElementById('loginTab').classList.remove('active');
    }
  }
  
  function register() {
    let username = document.getElementById("registerUsername").value.trim();
    let email = document.getElementById("registerEmail").value.trim();
    let password = document.getElementById("registerPassword").value.trim();
    let agreed = document.getElementById("termsCheckbox").checked;
  
    if (username === "" || email === "" || password === "") {
      alert("Please fill in all fields.");
      console.log("Registration failed: Missing fields.");
      return;
    }
  
    if (!agreed) {
      alert("You must agree to the terms and conditions before registering.");
      console.log("Registration failed: Terms not agreed.");
      return;
    }
  
    document.getElementById("registerUsername").value = "";
    document.getElementById("registerEmail").value = "";
    document.getElementById("registerPassword").value = "";
    document.getElementById("termsCheckbox").checked = false;
  
    let storedNames = JSON.parse(localStorage.getItem("accountname")) || [];
    if (storedNames.includes(username)) {
      alert("Username already exists. Choose a different one.");
      console.log(`Registration failed: Username "${username}" is already taken.`);
      return;
    }
  
    let accountname = JSON.parse(localStorage.getItem("accountname")) || [];
    let accountemail = JSON.parse(localStorage.getItem("accountemail")) || [];
    let accountpass = JSON.parse(localStorage.getItem("accountpass")) || [];
  
    accountname.push(username);
    accountemail.push(email);
    accountpass.push(password);
  
    localStorage.setItem("accountname", JSON.stringify(accountname));
    localStorage.setItem("accountemail", JSON.stringify(accountemail));
    localStorage.setItem("accountpass", JSON.stringify(accountpass));
  
    console.log(`User registered: ${username}`);
    console.log("All registered users:", accountname);
  
    alert("Registration successful! You can now log in.");
    showTab('login');
  }
  
  function login() {
    let username = document.getElementById("loginUsername").value.trim();
    let password = document.getElementById("loginPassword").value.trim();
  
    let storedNames = JSON.parse(localStorage.getItem("accountname")) || [];
    let storedPasswords = JSON.parse(localStorage.getItem("accountpass")) || [];
    let storedEmails = JSON.parse(localStorage.getItem("accountemail")) || [];
  
    let userIndex = storedNames.indexOf(username);
  
    if (userIndex === -1) {
      alert("No user found. Please register first.");
      console.log(`Login failed: Username "${username}" not found.`);
      return;
    }
  
    if (storedPasswords[userIndex] === password) {
      alert("Login successful! Welcome, " + storedEmails[userIndex]);
      console.log(`Login successful: ${username}`);
      closeModal();
    } else {
      alert("Invalid username or password.");
      console.log(`Login failed: Incorrect password for user "${username}".`);
    }
  }
  
  window.onclick = function(event) {
    let modal = document.getElementById('loginModal');
    if (event.target === modal) {
      closeModal();
    }
  };
