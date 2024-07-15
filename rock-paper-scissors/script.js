const rpcGame = function() {

    const rpc = ['R', 'P', 'S'];
    let keepPlaying = true;

    //create object of game stats
    const stats = {

        wins : 0,
        losses : 0,
        ties : 0,
        count : {
            rock : 0,
            paper : 0,
            scissors : 0
        }
    }


    while( keepPlaying ) {

        let userChoice = prompt("Enter your choice.", "R, P or S");

        if( !userChoice ) {
            return;
        }

        userChoice = userChoice.toUpperCase();

        if(!rpc.includes(userChoice)) {
            alert( "Please enter valid choice" );
        } else {

            const num = Math.floor( Math.random()*rpc.length);
            const computerChoice = rpc[num];

            if( userChoice === 'R' ) {
                stats.count.rock++;
            } else if( userChoice === 'P' ) {
                stats.count.paper++;
            }else {
                stats.count.scissors++;
            }

            alert( `Computer choice is  ${computerChoice}` );

            if( computerChoice === userChoice ) {

                stats.ties++;
                alert( "It's a tie");


            } else if( ( userChoice === 'R' && computerChoice === 'S' )
                    || ( userChoice === 'P' && computerChoice === 'R' ) 
                    || ( userChoice === 'S' && computerChoice === 'P' ) ) {

                stats.wins++;
                alert("You won!");
                
            } else {

                stats.losses++;
                alert(" You lost ");
                
            }

        }

        keepPlaying = confirm("Do you want to play again?");

    }

    alert(` Stats :
        Wins : ${stats.wins}
        Lost : ${stats.losses}
        Ties : ${stats.ties}
        Your Choices :
        Rock : ${stats.count.rock}
        Paper : ${stats.count.paper}
        Scissors : ${stats.count.scissors} 
        `);

};

rpcGame();