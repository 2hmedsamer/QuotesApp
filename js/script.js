
var Quotes = [
    {'author': 'Oscar Wilde', 
     'quote': 'Be yourself; everyone else is already taken.'
    },
    {'author': 'Bernard M. Baruch', 
     'quote': 'Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.'
    },
    {'author': 'Ralph Waldo Emerson', 
     'quote': 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.'
    },
    {'author': 'Allen Ginsberg', 
     'quote': 'Follow your inner moonlight; dont hide the madness.'
    },
    {'author': 'John Grisham, The Rainmaker', 
     'quote': 'Dont compromise yourself - you are all you have.'
    },
    {'author': 'Judy Garland', 
     'quote': 'Always be a first rate version of yourself and not a second rate version of someone else.'
    },
    {'author': 'Roy T. Bennett', 
     'quote': 'To shine your brightest light is to be who you truly are.'
    },
    {'author': 'Taylor Swift', 
     'quote': 'Just be yourself, there is no one better.'
    },
    {'author': 'Philip Pullman, The Golden Compass', 
     'quote': 'You cannot change what you are, only what you do.'
    },
    {'author': 'Tyra Banks', 
     'quote': 'Never dull your shine for somebody else.'
    },
];

function generateQuote(){
    var random = Number.parseInt(Math.random()*Quotes.length + 1);
    document.getElementById('quoteOutput').innerHTML = `"${Quotes[random].quote}"`;
    document.getElementById('authorOutput').innerHTML = `--${Quotes[random].author}`;
    
}