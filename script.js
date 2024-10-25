function calculateBudget() {
    
    const perPlayerCost = parseFloat(document.getElementById("perPlayers").value) || 0;
    const playerCount = document.querySelectorAll("#selected-list li").length;
    
    const playerExpense = perPlayerCost * playerCount;
    document.getElementById("playerExpense").textContent = playerExpense.toFixed(2);

    const managerCost = parseFloat(document.getElementById("manager").value) || 0;
    const coachCost = parseFloat(document.getElementById("coach").value) || 0;

    const totalBudget = playerExpense + managerCost + coachCost;
    document.getElementById("totalBudget").textContent = totalBudget.toFixed(2);
  }