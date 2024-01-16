//The following function is a modified version of the one I made
//for my "Hot&Cold Game" project
function addRow(tableID, reps){
    let tableRef = document.getElementById(tableID);
    // for (i = 1; i < reps + 1; i++){
        
    // }

    if (tableRef == document.getElementById("Frequency")){
        for (i = reps/6; i < reps + 1; i++){
            let newRow = tableRef.insertRow(-1);
            let diceVal = newRow.insertCell(0);
            diceVal.innerHTML = i;
        }
    }
    
    
}

function rollDice(){
    //First Step: Storing the vals from Radio & Text responses
    //I got inspo for this from geeksforgeeks.org
    var nums = document.getElementsByName('num');
    numDie = 0;

    for (i = 0; i < nums.length; i++){
        if (nums[i].checked){
            numDie = parseInt(nums[i].value); 
        }
    }
    console.log(numDie);

    var rolls = parseInt(document.getElementById('rollnum').value);
    console.log(rolls);

    
    addRow("Frequency", numDie*6);


    //Actually rolling the dice LMAO
    var die = 0;
    const allRolls = [];

    for (i = 0; i < rolls; i++){
        for(j = 0; j < numDie; j++){
            die = Math.floor(Math.random() * 6) + 1;
            allRolls.push(die);
        }
    }

    console.log(allRolls);
    console.log(checkDouble(allRolls));






}

function checkDouble(arr){
    // var doubles = 0;
    // for (i = 0; i < arr.length - 1; i++){
    //     for (j = i + 1; i < arr.length; j++)
    //     if (arr[i] == arr[j]){
    //         doubles++;
    //     }
    // }
    // return doubles;
}

function checkTriple(arr){

}

function calcMean(arr){

}

function calcMedian(arr){

}

function calcMode(arr){

}
