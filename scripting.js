//The following function is a modified version of the one I made
//for my "Hot&Cold Game" project
function addRow(tableID){
    let tableRef = document.getElementById(tableID);
    let newRow = table.Ref.insertRow(-1);
    
}

function rollDice(){
    //First Step: Storing the vals from Radio & Text responses
    //I got inspo for this from geeksforgeeks.org
    var nums = document.getElementsByName('num');
    numDie = 0;

    for (i = 0; i < nums.length; i++){
        if (nums[i].checked){
            numDie = nums[i].value; 
        }
    }
    console.log(numDie);

}
