var p1Mana = 80;
var p1Aether = 0;
var p1Damage = 0;
var p2Mana = 80;
var p2Aether = 0;
var p2Damage = 0;


var manaP1;
var aetherP1;
var damageP1;
var chargeP1;
var resolveP1;
var manaUpP1;
var manaDownP1;
var aetherUpP1;
var aetherDownP1;
var damageUpP1;
var damageDownP1;

var manaP2;
var aetherP2;
var damageP2;
var chargeP2;
var resolveP2;
var manaUpP2;
var manaDownP2;
var aetherUpP2;
var aetherDownP2;
var damageUpP2;
var damageDownP2;

var newGame;

window.addEventListener( 'load', function() {
    // Initialize global variables with DOM element references
    manaP1 = document.getElementById( 'p1Mana' );
    aetherP1 = document.getElementById( 'p1Aether' );
    damageP1 = document.getElementById( 'p1Damage' );
    chargeP1 = document.getElementById( 'chargeAether1' );
    resolveP1 = document.getElementById( 'p1Resolve' );
    manaUpP1 = document.getElementById( 'chargeMana1' );
    manaDownP1 = document.getElementById( 'drainMana1' );
    aetherUpP1 = document.getElementById( 'upAether1' );
    aetherDownP1 = document.getElementById( 'downAether1' );
    damageUpP1 = document.getElementById( 'upDamage1' );
    damageDownP1 = document.getElementById( 'downDamage1' );

    manaP2 = document.getElementById( 'p2Mana' );
    aetherP2 = document.getElementById( 'p2Aether' );
    damageP2 = document.getElementById( 'p2Damage' );
    chargeP2 = document.getElementById( 'chargeAether2' );
    resolveP2 = document.getElementById( 'p2Resolve' );
    manaUpP2 = document.getElementById( 'chargeMana2' );
    manaDownP2 = document.getElementById( 'drainMana2' );
    aetherUpP2 = document.getElementById( 'upAether2' );
    aetherDownP2 = document.getElementById( 'downAether2' );
    damageUpP2 = document.getElementById( 'upDamage2' );
    damageDownP2 = document.getElementById( 'downDamage2' );

    newGame = document.getElementById( 'newGame' );


    // Get pre-existing data from browser storage
    var p1ManaFromStorage = JSON.parse( localStorage.getItem( 'p1Mana' ) );
    var p1AetherFromStorage = JSON.parse( localStorage.getItem( 'p1Aether' ) );
    var p1DamageFromStorage = JSON.parse( localStorage.getItem( 'p1Damage' ) );
    var p2ManaFromStorage = JSON.parse( localStorage.getItem( 'p2Mana' ) );
    var p2AetherFromStorage = JSON.parse( localStorage.getItem( 'p2Aether' ) );
    var p2DamageFromStorage = JSON.parse( localStorage.getItem( 'p2Damage' ) );

    if ( p1ManaFromStorage !== null ) {
        p1Mana = p1ManaFromStorage;
    }

    if ( p1AetherFromStorage !== null ) {
        p1Aether = p1AetherFromStorage;
    }

    if ( p1DamageFromStorage !== null ) {
        p1Damage = p1DamageFromStorage;
    }

    if ( p2ManaFromStorage !== null ) {
        p2Mana = p2ManaFromStorage;
    }

    if ( p2AetherFromStorage !== null ) {
        p2Aether = p2AetherFromStorage;
    }

    if ( p2DamageFromStorage !== null ) {
        p2Damage = p2DamageFromStorage;
    }


    // Initialize page display values
    manaP1.innerText = p1Mana;
    aetherP1.innerText = p1Aether;
    damageP1.innerText = p1Damage;
    manaP2.innerText = p2Mana;
    aetherP2.innerText = p2Aether;
    damageP2.innerText = p2Damage;


    // Add button event listeners
    chargeP1.addEventListener(
        'click',
        function( evnt ) {
            if ( p1Aether > 0 ) {
                manaUp( 1 );
                aetherDown( 1 );
            }
        },
        true
    );

    resolveP1.addEventListener(
        'click',
        function( evnt ) {
            resolveDamage( 1 );
        },
        true
    );

    manaUpP1.addEventListener(
        'click',
        function( evnt ) {
            manaUp( 1 );
        },
        true
    );

    manaDownP1.addEventListener(
        'click',
        function( evnt ) {
            manaDown( 1 );
        },
        true
    );

    aetherUpP1.addEventListener(
        'click',
        function( evnt ) {
            aetherUp( 1 );
        },
        true
    );

    aetherDownP1.addEventListener(
        'click',
        function( evnt ) {
            aetherDown( 1 );
        },
        true
    );

    damageUpP1.addEventListener(
        'click',
        function( evnt ) {
            damageUp( 1 );
        },
        true
    );

    damageDownP1.addEventListener(
        'click',
        function( evnt ) {
            damageDown( 1 );
        },
        true
    );


    chargeP2.addEventListener(
        'click',
        function( evnt ) {
            if ( p2Aether > 0 ) {
                manaUp( 2 );
                aetherDown( 2 );
            }
        },
        true
    );

    resolveP2.addEventListener(
        'click',
        function( evnt ) {
            resolveDamage( 2 );
        },
        true
    );

    manaUpP2.addEventListener(
        'click',
        function( evnt ) {
            manaUp( 2 );
        },
        true
    );

    manaDownP2.addEventListener(
        'click',
        function( evnt ) {
            manaDown( 2 );
        },
        true
    );

    aetherUpP2.addEventListener(
        'click',
        function( evnt ) {
            aetherUp( 2 );
        },
        true
    );

    aetherDownP2.addEventListener(
        'click',
        function( evnt ) {
            aetherDown( 2 );
        },
        true
    );

    damageUpP2.addEventListener(
        'click',
        function( evnt ) {
            damageUp( 2 );
        },
        true
    );

    damageDownP2.addEventListener(
        'click',
        function( evnt ) {
            damageDown( 2 );
        },
        true
    );


    newGame.addEventListener(
        'click',
        function( evnt ) {
            startNewGame();
        },
        true
    );


    checkIfDead( 1 );
    checkIfDead( 2 );
});


function savePageState() {
    localStorage.setItem( 'p1Mana', JSON.stringify( p1Mana ) );
    localStorage.setItem( 'p1Aether', JSON.stringify( p1Aether ) );
    localStorage.setItem( 'p1Damage', JSON.stringify( p1Damage ) );
    localStorage.setItem( 'p2Mana', JSON.stringify( p2Mana ) );
    localStorage.setItem( 'p2Aether', JSON.stringify( p2Aether ) );
    localStorage.setItem( 'p2Damage', JSON.stringify( p2Damage ) );
}

function deletePageState() {
    localStorage.removeItem( 'p1Mana', JSON.stringify( p1Mana ) );
    localStorage.removeItem( 'p1Aether', JSON.stringify( p1Aether ) );
    localStorage.removeItem( 'p1Damage', JSON.stringify( p1Damage ) );
    localStorage.removeItem( 'p2Mana', JSON.stringify( p2Mana ) );
    localStorage.removeItem( 'p2Aether', JSON.stringify( p2Aether ) );
    localStorage.removeItem( 'p2Damage', JSON.stringify( p2Damage ) );
}


function startNewGame() {
    p1Mana = 80;
    p1Aether = 0;
    p1Damage = 0;
    p2Mana = 80;
    p2Aether = 0;
    p2Damage = 0;

    manaP1.innerText = p1Mana;
    aetherP1.innerText = p1Aether;
    damageP1.innerText = p1Damage;
    manaP2.innerText = p2Mana;
    aetherP2.innerText = p2Aether;
    damageP2.innerText = p2Damage;

    checkIfDead( 1 );
    checkIfDead( 2 );

    deletePageState();
}


function checkIfDead( player ) {
    if ( player == 1 ) {
        if ( p1Mana < 0 ) {
            manaP1.style.backgroundColor = 'red';
            manaP1.style.color = 'white';
        }
        else {
            manaP1.style.backgroundColor = '';
            manaP1.style.color = '';
        }
    }

    if ( player == 2 ) {
        if ( p2Mana < 0 ) {
            manaP2.style.backgroundColor = 'red';
            manaP2.style.color = 'white';
        }
        else {
            manaP2.style.backgroundColor = '';
            manaP2.style.color = '';
        }
    }
}


// Mana buttons
function manaUp( player ) {
    if ( player == 1 ) {
        p1Mana++;
        manaP1.innerText = p1Mana;
        checkIfDead( 1 );
    }

    if ( player == 2 ) {
        p2Mana++;
        manaP2.innerText = p2Mana;
        checkIfDead( 2 );
    }

    savePageState();
}

function manaDown( player ) {
    if ( player == 1 ) {
        p1Mana--;
        manaP1.innerText = p1Mana;
        checkIfDead( 1 );
    }

    if ( player == 2 ) {
        p2Mana--;
        manaP2.innerText = p2Mana;
        checkIfDead( 2 );
    }

    savePageState();
}


// Aether buttons
function aetherUp( player ) {
    if ( player == 1 ) {
        p1Aether++;
        aetherP1.innerText = p1Aether;
    }

    if ( player == 2 ) {
        p2Aether++;
        aetherP2.innerText = p2Aether;
    }

    savePageState();
}

function aetherDown( player ) {
    if ( player == 1 && p1Aether > 0 ) {
        p1Aether--;
        aetherP1.innerText = p1Aether;
    }

    if ( player == 2 && p2Aether > 0 ) {
        p2Aether--;
        aetherP2.innerText = p2Aether;
    }

    savePageState();
}


// Damage buttons
function damageUp( player ) {
    if ( player == 1 ) {
        p1Damage++;
        damageP1.innerText = p1Damage;
    }

    if ( player == 2 ) {
        p2Damage++;
        damageP2.innerText = p2Damage;
    }

    savePageState();
}

function damageDown( player ) {
    if ( player == 1 && p1Damage > 0 ) {
        p1Damage--;
        damageP1.innerText = p1Damage;
    }

    if ( player == 2 && p2Damage > 0 ) {
        p2Damage--;
        damageP2.innerText = p2Damage;
    }

    savePageState();
}

function resolveDamage( player ) {
    if ( player == 1 && p1Damage > 0 ) {
        p2Mana -= p1Damage;
        p1Damage = 0;
        damageP1.innerText = p1Damage;
        manaP2.innerText = p2Mana;
        checkIfDead( 2 );
    }

    if ( player == 2 && p2Damage > 0 ) {
        p1Mana -= p2Damage;
        p2Damage = 0;
        damageP2.innerText = p2Damage;
        manaP1.innerText = p1Mana;
        checkIfDead( 1 );
    }

    savePageState();
}


// On unload, save the page state
window.addEventListener(
	'unload',
	function( evnt ) {
		savePageState();
	}
);