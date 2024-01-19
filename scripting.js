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
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return (sum / arr.length).toFixed(2);
}

//I learned how to make this function from tutorials point
//AND by learning about the sort function on W3 Schools
function calcMedian(arr){
    const middle = Math.floor(arr.length / 2);
    const sorted = arr.sort((a, b) => a - b);

    if (arr.length % 2 == 0){
        return Math.round((sorted[middle - 1] + sorted[middle]) / 2);
    } else {
        return sorted[middle];
    }
}

function calcMode(arr){
    const sorted = arr.sort((a, b) => a - b);
    const freqs = [];
    for (let i = 0; i < arr.length; i++){
        freqs.push(howMany_in_(arr[i], arr));
    }
    var max = 0;
    for (let i = 0; i < freqs.length; i++){
        if (freqs[i] > max){
            max = freqs[i];
        }
    }
    console.log(sorted);
    console.log(freqs);
    return sorted[freqs.indexOf(max)];
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
            let stat = newRow.insertCell(1);
            // stat.innerHTML = 0;
            //If only 1 dice is rolled, the stats are Mean, Median and Mode
            if (reps == 3){
                if (i == 0){
                    statName.innerHTML = "Mean";
                    stat.innerHTML = calcMean(allRolls);
                } else if (i == 1){
                    statName.innerHTML = "Median";
                    stat.innerHTML = calcMedian(allRolls);
                } else if (i == 2){
                    statName.innerHTML = "Mode";
                    stat.innerHTML = calcMode(allRolls);
                }
            }
            //If 2 dice are rolled, the additional stat "Doubles" appears
            if (reps == 4){
                if (i == 0){
                    statName.innerHTML = "Doubles";
                    stat.innerHTML = doubles;
                } else if (i == 1){
                    statName.innerHTML = "Mean";
                    stat.innerHTML = calcMean(allRolls);
                } else if (i == 2){
                    statName.innerHTML = "Median";
                    stat.innerHTML = calcMedian(allRolls);
                } else if (i == 3){
                    statName.innerHTML = "Mode";
                    stat.innerHTML = calcMode(allRolls);
                }
            }
            //If 3 dice are rolled, the additional stat "Triples" appears
            if (reps == 5){
                if (i == 0){
                    statName.innerHTML = "Doubles";
                    stat.innerHTML = doubles;
                } else if (i == 1){
                    statName.innerHTML = "Triples";
                    stat.innerHTML = triples;
                } else if (i == 2){
                    statName.innerHTML = "Mean";
                    stat.innerHTML = calcMean(allRolls);
                } else if (i == 3){
                    statName.innerHTML = "Median";
                    stat.innerHTML = calcMedian(allRolls);
                } else if (i == 4){
                    statName.innerHTML = "Mode";
                    stat.innerHTML = calcMode(allRolls);
                }
            }
    
        }
    }
    
}
