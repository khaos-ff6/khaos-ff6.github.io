var p1Mana = 80;
var p1Aether = 0;
var p1Damage = 0;


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

    newGame = document.getElementById( 'newGame' );


    // Get pre-existing data from browser storage
    var p1ManaFromStorage = JSON.parse( localStorage.getItem( 'pMana' ) );
    var p1AetherFromStorage = JSON.parse( localStorage.getItem( 'pAether' ) );
    var p1DamageFromStorage = JSON.parse( localStorage.getItem( 'pDamage' ) );

    if ( p1ManaFromStorage !== null ) {
        p1Mana = p1ManaFromStorage;
    }

    if ( p1AetherFromStorage !== null ) {
        p1Aether = p1AetherFromStorage;
    }

    if ( p1DamageFromStorage !== null ) {
        p1Damage = p1DamageFromStorage;
    }


    // Initialize page display values
    manaP1.innerText = p1Mana;
    aetherP1.innerText = p1Aether;
    damageP1.innerText = p1Damage;


    // Add button event listeners
    chargeP1.addEventListener(
        'click',
        function( evnt ) {
            if ( p1Aether > 0 ) {
                manaUp();
                aetherDown();
            }
        },
        true
    );

    resolveP1.addEventListener(
        'click',
        function( evnt ) {
            resolveDamage();
        },
        true
    );

    manaUpP1.addEventListener(
        'click',
        function( evnt ) {
            manaUp();
        },
        true
    );

    manaDownP1.addEventListener(
        'click',
        function( evnt ) {
            manaDown();
        },
        true
    );

    aetherUpP1.addEventListener(
        'click',
        function( evnt ) {
            aetherUp();
        },
        true
    );

    aetherDownP1.addEventListener(
        'click',
        function( evnt ) {
            aetherDown();
        },
        true
    );

    damageUpP1.addEventListener(
        'click',
        function( evnt ) {
            damageUp();
        },
        true
    );

    damageDownP1.addEventListener(
        'click',
        function( evnt ) {
            damageDown();
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


    checkIfDead();
});


function savePageState() {
    localStorage.setItem( 'pMana', JSON.stringify( p1Mana ) );
    localStorage.setItem( 'pAether', JSON.stringify( p1Aether ) );
    localStorage.setItem( 'pDamage', JSON.stringify( p1Damage ) );
}

function deletePageState() {
    localStorage.removeItem( 'pMana', JSON.stringify( p1Mana ) );
    localStorage.removeItem( 'pAether', JSON.stringify( p1Aether ) );
    localStorage.removeItem( 'pDamage', JSON.stringify( p1Damage ) );
}


function startNewGame() {
    if ( confirm( "Start a new game?" ) ) {
        p1Mana = 80;
        p1Aether = 0;
        p1Damage = 0;

        manaP1.innerText = p1Mana;
        aetherP1.innerText = p1Aether;
        damageP1.innerText = p1Damage;

        checkIfDead();
        deletePageState();
    }
}


function checkIfDead() {
    if ( p1Mana < 0 ) {
        manaP1.style.backgroundColor = 'red';
        manaP1.style.color = 'white';
    }
    else {
        manaP1.style.backgroundColor = '';
        manaP1.style.color = '';
    }
}


// Mana buttons
function manaUp() {
    p1Mana++;
    manaP1.innerText = p1Mana;
    checkIfDead();
    savePageState();
}

function manaDown() {
    p1Mana--;
    manaP1.innerText = p1Mana;
    checkIfDead();
    savePageState();
}


// Aether buttons
function aetherUp() {
    p1Aether++;
    aetherP1.innerText = p1Aether;
    savePageState();
}

function aetherDown() {
    p1Aether--;
    aetherP1.innerText = p1Aether;
    savePageState();
}


// Damage buttons
function damageUp() {
    p1Damage++;
    damageP1.innerText = p1Damage;
    savePageState();
}

function damageDown() {
    p1Damage--;
    damageP1.innerText = p1Damage;
    savePageState();
}

function resolveDamage() {
    p1Damage = 0;
    damageP1.innerText = p1Damage;
    savePageState();
}


// On unload, save the page state
window.addEventListener(
	'unload',
	function( evnt ) {
		savePageState();
	}
);