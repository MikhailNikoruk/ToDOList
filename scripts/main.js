document.getElementById('saveGoal').addEventListener('click', function() {
    const goalInput = document.getElementById('goalInput');
    const goalText = goalInput.value.trim();
            
    if (goalText) {
        const goalsList = document.getElementById('goalsList');
        const goalElement = document.createElement('div');
        goalElement.className = 'goal-item';
        goalElement.textContent = goalText;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            goalsList.removeChild(goalElement);
        };
        
        goalElement.appendChild(deleteBtn);
        goalsList.appendChild(goalElement);
                
        goalInput.value = '';
    } 
});