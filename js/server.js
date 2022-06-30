// SETUP: npm install cors; npm install figlet
//         --save          i think if you want to export with all requirements. not sure what it does

const http = require('http');
const fs = require('fs');
const url = require('url');
const cors = require('cors');
const querystring = require('querystring');
const figlet = require('figlet');


function roll_X_sided(base){
    let ans = Math.random(base) * base
    ans = Math.ceil(ans)
    return ans
}

function pc_play(){
    let pick1 = ['ROCK','PAPER','SCISSOR'];
    let ans = pick1[roll_X_sided(3) - 1]
    return ans
}

function isTheWinner(p1,p2){
    //2 players. if player1 wins then player2 does not
    if( p1 === p2){
        return "TIE"
     }else
    if(p1 == "ROCK"){
                if(p2=="SCISSOR"){return 1
                        //  }else{ans = 2}
                }else if(p1 == "PAPER"){
                                        if(p2=="ROCK"){return 1
                                            // }else{ans = 2}
                                        }else if(p1 == "SCISSOR"){
                                                            if(p2=="PAPER"){return 1
                                                            // }else{ans = 2}
    
                                                        }else{
                                                        }
                                                        // console.log("ans is: " + ans)
                                                    }
                                                }
                                            }
                                            return 2


}

function playRPS(player1,player2){
                      //need the player's choice from 'ROCK', 'PAPER', and 'SCISSOR'
                      let theWinner = isTheWinner(player1,player2)
                      const gameResults = {
                          p1:player1,
                          p2:player2,
                          winner:theWinner
                        //   "p1":gameResults.player1=player1,
                        //   "p2":gameResults.player2=player2,
                        //   "winner":gameResults.winner = theWinner,
                      }
                      console.log("almost.  add the rules.")
                    //   return gameResults
                      return JSON.stringify(gameResults)
}



const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    if (page == '/'){

        fs.readFile('../index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});       //response, write header
            res.write(data);        // response, write data
            // console.log(data);
            res.end();                // response, end response
        });
        
        
    }else if (page == '/pika'){

        fs.readFile('../pikapage.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});       //response, write header
            res.write(data);        // response, write data
            // console.log(data);
            res.end();                // response, end response
        });
        


    }else if (page == '/css/style.css'){
        
        fs.readFile('../css/style.css', function(err, data) {
            
            res.write(data);        // response, write data
            // console.log(data);
            res.end();                // response, end response
        });
        
        
    }else if (page == '/assets/fire_and_ice.png'){

        fs.readFile('../assets/fire_and_ice.png', function(err, data) {
            
            res.write(data);        // response, write data
            // console.log(data);
            res.end();                // response, end response
        });



        
    }else if (page == '/js/main.js'){
        
        fs.readFile('./main.js', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/javascript'});       //response, write header
            res.write(data);        // response, write data
            // console.log(data);
            res.end();                // response, end response
        });
        
        

    }else if (page == '/api'){
        
         console.log("api called")
         console.log(params)
        // time to accept some kind of input & send appropriate response if API has multiple things to do

        if('student' in params){
            // let ans = "pikapika"
            let p1 = params['student']
            let p2 = pc_play()
            console.log("p1:"+p1+", p2:"+p2)
            // console.log(playRPS(p1,p2) )
            let ans=(playRPS(p1,p2))
            console.log(ans)
            const objToJson = ans
            // let ans = ""
            // console.log("user entry:"+ params["student"])
            // console.log("ans:"+ ans)
            
            
            // if(params['student']=='leon'){

                // if(params['student']=='janken'){
                    
                    //give the leon student API response
                    
                    // fs.readFile('../pikapage.html', function(err, data) {
                        // res.writeHead(200, {'Content-Type': 'text/html'});       //response, write header

                        res.writeHead(200, {'Content-Type': 'application/json'});       //response, write header

                        // res.write(data);        // response, write data
                        // console.log(params['student']);
                        

                    // var p1 = params['student']
                    //RULES OF THE GAME
                    // console.log("ans:"+ ans)

                
                
                
                
                // let ans1 = "hello"
                        //     const objToJson = {
                        //         name: "leon",
                        //         status: "Boss Man",
                        //         currentOccupation: "Baller"
                        //        }                        
                        //        console.log(objToJson);
                        //    res.end(JSON.stringify(objToJson));                // response, end response
                        // console.log("ans:"+ ans)

                            // const objToJson = {
                            //                     player1: p1,
                            //                     player2: p2,
                            //                     winner: "p" + ans
                            //                     }                        
                            // console.log(objToJson);
                           res.end(JSON.stringify(objToJson));                // response, end response



                // );

            //    console.log(ans) 
            };
            // }
            


    }else{
        data = "ERROR NUMBER 404."
        res.write(data);
        res.end();

        // figlet('404!!', function(err, data) {
        //     if (err){
        //         console.log('Something went wrong...');
        //         console.dir(err);
        //         return;
        //     }
        //     res.write(data);
        //     res.end();
        // });
    }
// }  //added in haste

});
server.listen(8000);

