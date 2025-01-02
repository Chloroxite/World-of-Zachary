//Storing this unicode character here for later use: █ ©
//This code makes the ARG function. There be spoilers...

//why is this not a standard function in javascript........
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

//Wait until the page is actually freaking loaded...
window.onload = function() {
	terminalBoot();
}

async function terminalBoot(){
	let terminal = document.getElementById("terminal");	
    let stringBuffer;
	
	//Begin "boot" sequence
    await writeText("Checking CPU...", terminal); 
    await sleep(1000);
    await writeText("Ok!", terminal);
    await writeText("\nChecking RAM...", terminal);
    await sleep(1000);
    await writeText("Ok!", terminal);
    await writeText("\nBIOS checksum verification...", terminal); 
    await sleep(1000);
    await writeText("Ok!", terminal);
    await writeText("\nLoading kernel...", terminal);

    await sleep(5000);

    stringBuffer = 
        "\n\nCinux OS"
        +"\nCinux Corporation ©3521"
        +"\nKernel version 5.27.01"
        +"\nAugust 7th, 12580"
        +"\nLogging in as Guest, write priviledges disabled."
        +"\nSYS_ERROR: Filesystem corruption detected! Attempting repairs. This may take some time...";

    await writeText(stringBuffer, terminal);

    await sleep(1000);

    await glitchText("\nOur revelations came a long time ago...", terminal);
}

async function terminalSim(terminal){
    let manpages = { "help": 
		"Available commands:"
		+"\ncd"
		+"\nls"
		+"\ncat"
	};
    let userInput = "";

    while(userInput != logout){
        
    }
}

//write the text out like in those hacking movies.
async function writeText(string, terminal){ 
    let textBuff = terminal.innerText;
    let charArray = string.split("");

    for (char of charArray){
        textBuff += char;
        terminal.innerText = textBuff;
        await sleep(10);
    }
}

//have the text "glitch" onto the screen instead.
async function glitchText(string, terminal){
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let textBuff = terminal.innerText;
    
    for (i = 0; i < string.length; i++){
        textBuff += string.charAt(i);
        let textBuff2 = "";
        for (j = i+1; j < string.length; j++){
            textBuff2 += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        terminal.innerText = textBuff + textBuff2;
        await sleep(20);
    }
}

