//Storing this unicode character here for later use: █ ©
//This code makes the ARG function. There be spoilers...

//why is this not a standard function in javascript........
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

//Wait until the page is actually freaking loaded...
window.onload = function() {
	terminalSim();
}

async function terminalSim(){
	let terminal = document.getElementById("terminal");
	let manpages = { "help": 
		"Available commands:"
		+"\ncd"
		+"\nls"
		+"\ncat"
	};
	
	//Begin "boot" sequence
	let stringBuffer = 
    "Checking CPU... Ok!"
    +"\nChecking RAM... Ok!"
    +"\nBIOS checksum verification... Ok!"
    +"\nLoading kernel...";

    await writeText(stringBuffer, terminal);

    await sleep(5000);

    stringBuffer = 
        "\n\nCinux OS"
        +"\nCinux Corporation ©3521"
        +"\nAugust 7th, 12580"
        +"\n>There is nothing here yet...";

    await writeText(stringBuffer, terminal);
}

async function writeText(string, terminal){
    let textBuff = terminal.innerText;
    let charArray = string.split("");
    for (char of charArray){
        textBuff += char;
        terminal.innerText = textBuff;
        await sleep(10);
    }
}
