function loadFacts() {
    const container = document.getElementById("facts-container");
    container.innerHTML = ""; // Clear existing
  
    facts.forEach(fact => {
      const div = document.createElement("div");
      div.className = "fact-card";
      div.innerHTML = `
        ${fact.text}
        <button onclick="likeFact(${fact.id})">❤️</button>
      `;
      container.appendChild(div);
    });
  }
  
  function likeFact(id) {
    const fact = facts.find(f => f.id === id);
    const alreadyLiked = document.querySelector(`#liked-${id}`);
  
    if (fact && !alreadyLiked) {
      const div = document.createElement("div");
      div.className = "fact-card liked";
      div.id = `liked-${id}`;
      div.innerHTML = `
        ${fact.text}
        <button onclick="unlikeFact(${id})">❌</button>
      `;
      document.getElementById("liked-container").appendChild(div);
    }
  }
  
  function unlikeFact(id) {
    const likedDiv = document.getElementById(`liked-${id}`);
    if (likedDiv) {
      likedDiv.remove();
    }
  }
  
  function sortFacts(type) {
    if (type === "alpha") {
      facts.sort((a, b) => a.text.localeCompare(b.text));
    } else if (type === "reverse") {
      facts.sort((a, b) => b.text.localeCompare(a.text));
    } else if (type === "random") {
      facts.sort(() => Math.random() - 0.5);
    }
    loadFacts();
  }
  
  document.getElementById("search").addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const container = document.getElementById("facts-container");
    container.innerHTML = "";
  
    const filtered = facts.filter(fact => fact.text.toLowerCase().includes(searchTerm));
    filtered.forEach(fact => {
      const div = document.createElement("div");
      div.className = "fact-card";
      div.innerHTML = `
        ${fact.text}
        <button onclick="likeFact(${fact.id})">❤️</button>
      `;
      container.appendChild(div);
    });
  });
  
  loadFacts(); // Initial load
  