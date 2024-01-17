var allRolls = [];
// var die = 0;
var die1 = 0;
var die2 = 0;
var die3 = 0;
var doubles = 0;
var triples = 0;

function rollDice(){
    //First Step: Storing the vals from Radio & Text responses
    //I got inspo for this from geeksforgeeks.org
    var nums = document.getElementsByName('num');
    numDie = 0;

    for (let i = 0; i < nums.length; i++){
        if (nums[i].checked){
            numDie = parseInt(nums[i].value); 
        }
    }
    console.log(numDie);

    var rolls = parseInt(document.getElementById('rollnum').value);
    console.log(rolls);

    
  


    //Actually rolling the dice LMAO
    // var die = 0;
    // let allRolls = [];

    for (let i = 0; i < rolls; i++){
        // die = 0;
        // for(let j = 0; j < numDie; j++){
        //     die += Math.floor(Math.random() * 6) + 1;
        // }
        die1 = 0;
        die2 = 0;
        die3 = 0;
        if (numDie == 1){
            die1 = Math.floor(Math.random() * 6) + 1;
            console.log(die1, die2, die3);
        } else if (numDie == 2){
            die1 = Math.floor(Math.random() * 6) + 1;
            die2 = Math.floor(Math.random() * 6) + 1;
            console.log(die1, die2, die3);
            doubleOrtriple(die1, die2, die3);
            console.log("Doubles: " + doubles + " Triples: " + triples);
        } else if (numDie == 3){
            die1 = Math.floor(Math.random() * 6) + 1;
            die2 = Math.floor(Math.random() * 6) + 1;
            die3 = Math.floor(Math.random() * 6) + 1;
            console.log(die1, die2, die3);
            doubleOrtriple(die1, die2, die3);
            console.log("Doubles: " + doubles + " Triples: " + triples);
        }
        // allRolls.push(die);
        allRolls.push(die1 + die2 + die3);
    }
    

    let statRows = 3;
    if (numDie > 1){
        statRows += numDie - 1;
    }
    addRow("Frequency", numDie*6);
    console.log("statRows: " + statRows);
    addRow("Stats", statRows);

    console.log(allRolls);
    // console.log(checkDouble(allRolls));
    console.log(howMany_in_(6, allRolls));



}


function howMany_in_(num, arr){
    var frequency = 0;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] == num){
            frequency++;
        }
    }
    return frequency;
}


function doubleOrtriple(num1, num2, num3){
    if (num1 == num2 && num1 == num3){
        triples++;
    } else if (num1 == num2 || num1 == num3 || num2 == num3){
        doubles ++;
    }
}

function calcMean(arr){

}

function calcMedian(arr){

}

function calcMode(arr){

}

//The following function is a modified version of the one I made
//for my "Hot&Cold Game" project
function addRow(tableID, reps){
    let tableRef = document.getElementById(tableID);
 
    if (tableRef == document.getElementById("Frequency")){
        for (let i = reps/6; i < reps + 1; i++){
            let newRow = tableRef.insertRow(-1);
            let diceVal = newRow.insertCell(0);
            diceVal.innerHTML = i;
            let valFreq = newRow.insertCell(1);
            console.log(allRolls.length);
            valFreq.innerHTML = howMany_in_(i, allRolls);
        }
    }

    if (tableRef == document.getElementById("Stats")){
        for (let i = 0; i < reps; i++){
            let newRow = tableRef.insertRow(-1);
            let statName = newRow.insertCell(0);
            if (reps == 3){
                if (i == 0){
                    statName.innerHTML = "Mean";
                }
            }
            statName.innerHTML = 0;
            let stat = newRow.insertCell(1);
            stat.innerHTML = 0;
        }
    }
    
}
