var allRolls = [];
var die = 0;

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
    // var die = 0;
    // let allRolls = [];

    for (i = 0; i < rolls; i++){
        for(j = 0; j < numDie; j++){
            die = Math.floor(Math.random() * 6) + 1;
            allRolls.push(die);
        }
    }


    console.log(allRolls);
    // console.log(checkDouble(allRolls));
    console.log(howMany_in_(6, allRolls));






}

function howMany_in_(num, arr){
    var frequency = 0;
    for(i = 0; i < arr.length; i++){
        if (arr[i] == num){
            frequency++;
        }
    }
    return frequency;
}

function checkDouble(arr){
    doubles = 0;
    const checkArr = arr;
    for (i = 0; i < checkArr.length - 1; i++){
        for (j = 0; j < checkArr.length; j++){
            if (checkArr[i] == checkArr[j]){
                doubles++;
                checkArr.splice(checkArr.indexOf(i), checkArr.indexOf(i));
                checkArr.splice(checkArr.indexOf(j), checkArr.indexOf(j));
                i = 0;
                j = 0;
            }
        }
    }
    return doubles;
}

function checkTriple(arr){

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
    // for (i = 1; i < reps + 1; i++){
        
    // }

    if (tableRef == document.getElementById("Frequency")){
        for (i = reps/6; i < reps + 1; i++){
            let newRow = tableRef.insertRow(-1);
            let diceVal = newRow.insertCell(0);
            diceVal.innerHTML = i;
            let valFreq = newRow.insertCell(1);
            // valFreq.innerHTML = howMany_in_(i, allRolls);
        }
    }
    
    
}
