function highJump(input) {
    
    let index = 0;

    let goal = Number(input[index]);
    index++;

    let lathHight = goal - 30;
    let jumpCounter = 0;
    let unsuccedJumpCount;
    let isFailed = false;

    for(let i = lathHight; i <= goal; i++){
        let jumpHight = Number(input[index]);
        index++;
        while(jumpHight > lathHight){

            if(jumpHight >= lathHight){
                jumpCounter++;
                lathHight += 5; 
            }else{
                jumpCounter++;
            }

            if(unsuccedJumpCount === 3){
                isFailed = true;
                console.log(`Tihomir failed at ${lathHight}cm after ${jumpCounter} jumps.`);
                break;
            }
            
        }
        if(isFailed){
            break;
        }
    }

    if(!isFailed){
        console.log(`Tihomir succeeded, he jumped over ${lathHight}cm after ${jumpCounter} jumps.`);
    }
      

}

highJump(["231",
"205",
"212",
"213",
"228",
"229",
"230",
"235"])
;