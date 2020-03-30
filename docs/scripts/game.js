//========================================================================
// DeVry University - New Development
// PROJECT TITLE:	Word Flight
// PROJECT DATE:	03/02/2020
// PROGRAMMERS:		Chris Medeiros
//					Samantha Harvey
//					Joanna Blackwell
//					James Powell
//					Sumeira Zehra
// FILE NAME:		game.js
// DESCRIPTION:		Controls the heart of Word Flight
// LAST UPDATE:		03/22/2020 - Created main game.js file to work from
//========================================================================

// Initialize game object
game = Object.create(GameObject.prototype);

// Keybindings
game.keys = ['A', 'S', 'D', 'F'];
for (var i = 0; i < game.keys.length-1; i++) {
    engine.input.bind(engine.key[game.keys[i]], game.keys[i]);
}

// Control bindings for testing purposes
game.controls = ['SPACE'];
for (var i = 0; i < game.controls.length; i++) {
	engine.input.bind(engine.key[game.controls[i]], game.controls[i]);
};

// Mouse bindings
game.mouse = ['LEFT', 'MIDDLE', 'RIGHT', 'WHEELDOWN', 'WHEELUP'];
for (var i = 0; i < game.mouse.length; i++) {
	// engine.input.bind(engine.button.LEFT, 'left_click');
	engine.input.bind(engine.button[game.mouse[i]], game.mouse[i]);
}

// Declare Game Variables
// - Globals
game.scale = 1.0;
// - Browser size monitors
game.oldWidth = 0;
game.oldHeight = 0;

// Image hooks
// - Start Scene
//   - Images
game.wordFlightTitle = {
    image: document.getElementById("wordFlightTitle"),
    org_width: 1000 * game.scale,
    org_height: 208 * game.scale,
    width: 0,
    height: 0,
	posX: 0,
	posY: 0,
    resize: function() {
        this.width = this.org_width * (1- engine.widthProportion);
        this.height = this.org_height * (1- engine.widthProportion);
		this.posX = engine.width/2 - this.width/2;
		this.posY = engine.height/4 - this.height/2;
    },
	draw: function() {
		this.resize();
		// drawImage(source, posX, posY, width, height)
		engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height); // 1000 x 208
	}
};

//   - Buttons
game.startButton = {
    image: document.getElementById("startButton"),
    org_width: 644 * game.scale,
    org_height: 156 * game.scale,
    width: 0,
    height: 0,
	posX: 0,
	posY: 0,
    resize: function() {
        this.width = this.org_width * (1- engine.widthProportion);
        this.height = this.org_height * (1- engine.widthProportion);
		this.posX = engine.width/2 - this.width/2;
		this.posY = engine.height/2 - this.height/2;
    },
	draw: function() {
		this.resize();
		// drawImage(source, posX, posY, width, height)
		// engine.context.drawImage(this.image, engine.width/2 - this.width/2, engine.height/2, this.width, this.height); // 644x156
	},
	adjustStyle: function() {
		this.resize();
		this.image.style.position = "absolute";
		this.image.style.display = "block";
		this.image.style.left = this.posX.toString() + "px";
		this.image.style.top = this.posY.toString() + "px";
		this.image.style.width = this.width + "px";
		this.image.style.height = this.height + "px";
		this.image.style.zIndex = 1;
	}
};

// - Play Scene
//   - Images
game.playBackground = {
    image: document.getElementById("playBackground"),
    org_width: 1923,
    org_height: 1093,
    width: 0,
    height: 0,
	posX: 0,
	posY: 0,
    resize: function() {
        this.width = engine.width;
        this.height = engine.height;
    },
	draw: function() {
		this.resize();
		// drawImage(source, posX, posY, width, height)
		engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
	}
};

game.playTitle = {
    image: document.getElementById("wordFlightTitleSmall"),
    org_width: 541 * game.scale,
    org_height: 120 * game.scale,
    width: 0,
    height: 0,
	posX: 0,
	posY: 0,
    resize: function() {
        this.width = this.org_width * (1- engine.widthProportion);
        this.height = this.org_height * (1- engine.widthProportion);
		this.posX = 10 * (1- engine.widthProportion);
		this.posY = 10 * (1- engine.widthProportion);
    },
	draw: function() {
		this.resize();
		// drawImage(source, posX, posY, width, height)
		engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
	}
};

game.playScore = {
    image: document.getElementById("playScore"),
    org_width: 555 * game.scale,
    org_height: 371 * game.scale,
    width: 0,
    height: 0,
	posX: 0,
	posY: 0,
    resize: function() {
        this.width = this.org_width * (1- engine.widthProportion);
        this.height = this.org_height * (1- engine.widthProportion);
		this.posX = engine.width/2 - this.width/2;
		this.posY = engine.height/4 - this.height/2;
    },
	draw: function() {
		this.resize();
		// drawImage(source, posX, posY, width, height)
		engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
	}
};

game.playSponsor = {
    image: document.getElementById("playSponsor"),
    org_width: 403 * game.scale,
    org_height: 490 * game.scale,
    width: 0,
    height: 0,
	org_posX: 1516,
	org_posY: 447,
	posX: 0,
	posY: 0,
    resize: function() {
        this.width = this.org_width * (1- engine.widthProportion);
        this.height = this.org_height * (1- engine.widthProportion);
		this.posX = this.org_posX - engine.widthDifference;
		this.posY = this.org_posY - engine.heightDifference;
    },
	draw: function() {
		this.resize();
		// drawImage(source, posX, posY, width, height)
		engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
	}
};

game.playTimer = {
    image: document.getElementById("playTimer"),
    org_width: 459 * game.scale,
    org_height: 371 * game.scale,
    width: 0,
    height: 0,
	posX: 0,
	posY: 0,
    resize: function() {
        this.width = this.org_width * (1- engine.widthProportion);
        this.height = this.org_height * (1- engine.widthProportion);
		this.posX = engine.width/2 - this.width/2;
		this.posY = engine.height/4 - this.height/2;
    },
	draw: function() {
		this.resize();
		// drawImage(source, posX, posY, width, height)
		engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
	}
};

game.playLetterSpace = {
    image: document.getElementById("playLetterSpace"),
    org_width: 110 * game.scale,
    org_height: 142 * game.scale,
    width: 0,
    height: 0,
	posX: 0,
	posY: 0,
    resize: function() {
        this.width = this.org_width * (1- engine.widthProportion);
        this.height = this.org_height * (1- engine.widthProportion);
		this.posX = engine.width/2 - this.width/2;
		this.posY = engine.height/4 - this.height/2;
    },
	draw: function() {
		this.resize();
		// drawImage(source, posX, posY, width, height)
		engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
	}
};

//   - Buttons
game.playMenuButton = {
    image: document.getElementById("wordFlightMenuButton"),
    org_width: 204 * game.scale,
    org_height: 69 * game.scale,
    width: 0,
    height: 0,
	posX: 0,
	posY: 0,
    resize: function() {
        this.width = this.org_width * (1- engine.widthProportion);
        this.height = this.org_height * (1- engine.widthProportion);
		this.posX = engine.width/2 - this.width/2;
		this.posY = engine.height/2 - this.height/2;
    },
	draw: function() {
		this.resize();
		// drawImage(source, posX, posY, width, height)
		// engine.context.drawImage(this.image, engine.width/2 - this.width/2, engine.height/2, this.width, this.height); // 644x156
	},
	adjustStyle: function() {
		this.resize();
		this.image.style.position = "absolute";
		this.image.style.display = "block";
		this.image.style.left = this.posX.toString() + "px";
		this.image.style.top = this.posY.toString() + "px";
		this.image.style.width = this.width + "px";
		this.image.style.height = this.height + "px";
		this.image.style.zIndex = 1;
	}
};

// - End Scene
//   - Images
//   - Buttons

// - Leaderboard Scene
//   - Images
game.leaderboardBackground = {
    image: document.getElementById("leaderboardBackground"),
    org_width: 1923,
    org_height: 1093,
    width: 0,
    height: 0,
	posX: 0,
	posY: 0,
    resize: function() {
        this.width = engine.width;
        this.height = engine.height;
    },
	draw: function() {
		this.resize();
		// drawImage(source, posX, posY, width, height)
		engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
	}
};

game.leaderboardTitle = {
    image: document.getElementById("wordFlightTitleSmall"),
    org_width: 541 * game.scale,
    org_height: 120 * game.scale,
    width: 0,
    height: 0,
	posX: 0,
	posY: 0,
    resize: function() {
        this.width = this.org_width * (1- engine.widthProportion);
        this.height = this.org_height * (1- engine.widthProportion);
		this.posX = 10 * (1- engine.widthProportion);
		this.posY = 10 * (1- engine.widthProportion);
    },
	draw: function() {
		this.resize();
		// drawImage(source, posX, posY, width, height)
		engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
	}
};

game.leaderboardClipboard = {
	image: document.getElementById("leaderboardClipboard"),
	org_width = 330 * game.scale,
	org_height = 459 * game.scale,
	width: 0,
	height: 0,
	posX: 0,
	posY: 0,
	resize: function() {
		this.width = this.org_width * (1- engine.widthProportion);
		this.height = this.org_height * (1- engine.widthProportion);
		this.posX = 10 * (1- engine.widthProportion);
		this.posY = 10 * (1- engine.widthProportion);
	},
	draw: function () {
		this.resize();
		//drawImage(source, posX, posY, width, height)
		engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
	}
};

game.leaderboardPlayerScore = {
	image: document.getElementById("leaderboardScore"),
	org_width = 450 * game.scale,
	org_height = 120 * game.scale,
	width: 0,
	height: 0,
	posX: 0,
	posY: 0,
	resize: function () {
		this.width = this.org_width * (1- engine.widthProportion);
		this.height = this.org_height * (1- engine.widthProportion);
		this.posX = 10 * (1- engine.widthProportion);
		this.posY = 10 * (1- engine.widthProportion);
	},
	draw: function () {
		this.resize();
		//drawImage(source, posX, posY, width, height)
		engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
	}
};
//   - Buttons
game.leaderboardMenuButton = {
    image: document.getElementById("wordFlightMenuButton"),
    org_width: 644 * game.scale,
    org_height: 156 * game.scale,
    width: 0,
    height: 0,
	posX: 0,
	posY: 0,
    resize: function() {
        this.width = this.org_width * (1- engine.widthProportion);
        this.height = this.org_height * (1- engine.widthProportion);
		this.posX = engine.width/2 - this.width/2;
		this.posY = engine.height/2 - this.height/2;
    },
	draw: function() {
		this.resize();
		// drawImage(source, posX, posY, width, height)
		engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
	},
	adjustStyle: function() {
		this.resize();
		this.image.style.position = "absolute";
		this.image.style.display = "block";
		this.image.style.left = this.posX.toString() + "px";
		this.image.style.top = this.posY.toString() + "px";
		this.image.style.width = this.width + "px";
		this.image.style.height = this.height + "px";
		this.image.style.zIndex = 1;
	}
};
game.leaderboardMenuButton = {
    image: document.getElementById("wordFlightMenuButton"),
    org_width: 204 * game.scale,
    org_height: 69 * game.scale,
    width: 0,
    height: 0,
	posX: 0,
	posY: 0,
    resize: function() {
        this.width = this.org_width * (1- engine.widthProportion);
        this.height = this.org_height * (1- engine.widthProportion);
		this.posX = engine.width/2 - this.width/2;
		this.posY = engine.height/2 - this.height/2;
    },
	draw: function() {
		this.resize();
		// drawImage(source, posX, posY, width, height)
		engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
	},
	adjustStyle: function() {
		this.resize();
		this.image.style.position = "absolute";
		this.image.style.display = "block";
		this.image.style.left = this.posX.toString() + "px";
		this.image.style.top = this.posY.toString() + "px";
		this.image.style.width = this.width + "px";
		this.image.style.height = this.height + "px";
		this.image.style.zIndex = 1;
	}
};

game.leaderboardRetryButton = {
    image: document.getElementById("leaderboardRetryButton"),
    org_width: 433 * game.scale,
    org_height: 105 * game.scale,
    width: 0,
    height: 0,
	posX: 0,
	posY: 0,
    resize: function() {
        this.width = this.org_width * (1- engine.widthProportion);
        this.height = this.org_height * (1- engine.widthProportion);
		this.posX = engine.width/2 - this.width/2;
		this.posY = engine.height/2 - this.height/2;
    },
	draw: function() {
		this.resize();
		// drawImage(source, posX, posY, width, height)
		engine.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
	},
	adjustStyle: function() {
		this.resize();
		this.image.style.position = "absolute";
		this.image.style.display = "block";
		this.image.style.left = this.posX.toString() + "px";
		this.image.style.top = this.posY.toString() + "px";
		this.image.style.width = this.width + "px";
		this.image.style.height = this.height + "px";
		this.image.style.zIndex = 1;
	}
};

/* Game States and transitions
** -- Start Scene
** |\ - Play Scene
** |  \ - End Scene
** \____\ - Leaderboard Scene
**        \ - Start Scene
*/
game.gameState = ['start', 'play', 'end', 'leaderboard'];
game.currState = game.gameState[0];

// Clear the screen of all elements
game.hideElements = {
	// Hide images
	images: function() {
		var y = document.getElementsByTagName("img");
		for (var i = 0; i < y.length; i++) {
			y[i].style.display = "none";
		}
	},
	// Hide canvas drawings
	canvas: function() {
		engine.context.clearRect(0, 0, engine.width, engine.height);
	},
	// Hide everything
	hideAll: function() {
		this.images();
		this.canvas();
	}
};

// Maintain live game data (timers, scores, etc.)
game.gameController = {
	gsStart: function(dt) {
		// Start Scene
		
		// Toggle next state
		for (var i = 0; i < game.controls.length; i++) {
			if (engine.input.pressed(game.controls[i])) {
				game.currState = game.gameState[1];
				game.hideElements.hideAll();
				game.drawOnce();
			}
		}
	},
	gsPlay: function(dt) {
		// Play Scene
		
		// Toggle next state
		for (var i = 0; i < game.controls.length; i++) {
			if (engine.input.pressed(game.controls[i])) {
				game.currState = game.gameState[2];
				game.hideElements.hideAll();
				game.drawOnce();
			}
		}
		
		// Handle mouse clicks
		for (var i = 0; i < game.mouse.length; i++) {
			if (engine.input.pressed(game.mouse[i])) {
				// alert("Event: " + game.mouse[i].toString());
			}
		}
	},
	gsEnd: function(dt) {
		// End Scene
		
		// Toggle next state
		for (var i = 0; i < game.controls.length; i++) {
			if (engine.input.pressed(game.controls[i])) {
				game.currState = game.gameState[3];
				game.hideElements.hideAll();
				game.drawOnce();
			}
		}
		
		// Handle mouse clicks
		for (var i = 0; i < game.mouse.length; i++) {
			if (engine.input.pressed(game.mouse[i])) {
				// alert("Event: " + game.mouse[i].toString());
			}
		}
	},
	gsLeaderboard: function(dt) {
		// Leaderboard Scene
		
		// Toggle next state
		for (var i = 0; i < game.controls.length; i++) {
			if (engine.input.pressed(game.controls[i])) {
				game.currState = game.gameState[0];
				game.hideElements.hideAll();
				game.drawOnce();
			}
		}
		
		// Handle mouse clicks
		for (var i = 0; i < game.mouse.length; i++) {
			if (engine.input.pressed(game.mouse[i])) {
				// alert("Event: " + game.mouse[i].toString());
			}
		}
	}
};

// Update
game.update = function(dt) {
	// Monitor game states
	switch(game.currState) {
		case 'start':
			this.gameController.gsStart(dt);
			break;
		case 'play':
			this.gameController.gsPlay(dt);
			break;
		case 'end':
			this.gameController.gsEnd(dt);
			break;
		case 'leaderboard':
			this.gameController.gsLeaderboard(dt);
			break;
		default:
			this.gameController.gsStart(dt);
			break;
	};
	
	// Montior window sizes
	if (this.oldWidth != engine.width || this.oldHeight != engine.height) {
		this.drawOnce();
		this.oldWidth = engine.width;
		this.oldHeight = engine.height;
	}
};

// Draw functions
// - Static
//   - Draw static assets once, if they are active
game.drawOnce = function() {
	// Draw based on the GameState
	switch(this.currState) {
		case 'start':
			// Draw images on the canvas
			this.wordFlightTitle.draw();
			// Display buttons
			this.startButton.adjustStyle();
			break;
		case 'play':
			// Draw images on the canvas
			this.playBackground.draw();
			this.playTitle.draw();
			this.playScore.draw();
			this.playSponsor.draw();
			this.playTimer.draw();
			
			this.playLetterSpace.draw();
			// Display buttons
			this.playMenuButton.adjustStyle();
			break;
		case 'end':
			// Draw images on the canvas
			
			// Display buttons
			
			break;
		case 'leaderboard':
			// Draw images on the canvas
			this.leaderboardBackground.draw();
			this.leaderboardTitle.draw();
			this.leaderboardClipboard.draw();
			this.leaderboardPlayerScore.draw();
			// Display buttons
			this.leaderboardMenuButton.adjustStyle();
			this.leaderboardRetryButton.adjustStyle();
			
			break;
		default:
			break;
	}
};
//   - First draw event
game.drawOnce();

// - Reactive
//   - React to window resizing
/*window.onresize = function(e) {
	game.hideElements.hideAll();
	game.drawOnce();
};*/

// - Animation
//   - Draw animations
game.draw = function() {
	
	// Draw based on the GameState
	switch(this.currState) {
		case 'start':
			break;
		case 'play':
			break;
		case 'end':
			break;
		case 'leaderboard':
			break;
		default:
			break;
	}
};

// Lose focus
window.onblur = function() {
    return game.stop();
};

// Gain focus
window.onfocus = function() {
    return game.run();
};

// Run Game
game.run();
