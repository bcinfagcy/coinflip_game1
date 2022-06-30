document.querySelector('#clickMe').addEventListener('click', makeReq)
// document.querySelector('#action1').addEventListener('click', action1)

function shakeToggle(id, togglebit){
    let elem = document.querySelector('#' + id)
    //add to class shakeMe
    if(togglebit == 1){
        elem.className = "box shakeMe"
    } else {
        elem.classList.remove("shakeMe")
        elem.classNeme = "box";
    }
}

function shake(selection){
    let id = selection;
    //toggle to shakeMe class
    shakeToggle(id,1)
    //wait
    //toggle back
    setTimeout(() => {shakeToggle(id,0)}, 400);
}

function boldToggle(id, togglebit){
    let elem = document.querySelector('#' + id)
    //add to class shakeMe
    if(togglebit == 1){
        elem.className = "readout bold"
    } else {
        elem.classList.remove("bold")
        elem.classNeme = "readout normal";
    }
}
function lubdub(selection){
    //selection should have a text that can become normal/bold.
    let id = selection;
    boldToggle(id,1)
    setTimeout(() => {boldToggle(id,0)}, 300);
}
function shakeP2(){
    //right is player2.
    shake("p2")
}

function shakeP1(){
    //left is player1.
    shake("p1")
}

// function action1(){
//     // alert("FINALLY!")
//     shakeP1()
//     shakeP2()
// }

function chkEntry( entry1 ){
    // if( document.querySelector("#userName").value; ){
        if( entry1 ){
            return true
        }else{
            return false
        }
    }
function updatePlays( p1, p2){
    //update the div for player1 and player2 choices
    let p1_play = document.querySelector("#p1")
    let p2_play = document.querySelector("#p2")
    p1_play.innerHTML = p1
    p2_play.innerHTML = p2
}

function results1(msg1){
    let target = document.querySelector('#results')
    target.innerHTML = msg1
    
    lubdub('results')
}

document.querySelector('#clickMe').addEventListener('click',makeReq)

async function makeReq(){
    const userName = ((document.querySelector("#userName").value).toUpperCase());
    
    if( chkEntry( userName )){

        // console.log(userName)
        const res = await fetch(`/api?student=${userName}`)
        const data = await res.json()

        // console.log(data)
        let p = JSON.parse(data)
        for (var key in p) {
            if (p.hasOwnProperty(key)){
                console.log(key + " -> " + p[key]);
            }
        }
        updatePlays(p.p1, p.p2)
        //shake the losing player
        if( p.winner == 1 ){
                            //shake p2
                            results1("player1 wins")
                            shakeP2()
                        } else if(p.winner == 2){
                                                        //shake p1
                                                        results1("player2 wins")
                                                        shakeP1()
                                                    } else{
                                                        results1("tie")
                                                            }
    }else{
        alert("choose your play.")
    }
}   