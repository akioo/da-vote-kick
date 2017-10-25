const Discord = require("discord.js");
const client = new Discord.Client();
const VoteKickController = require("./controller/VoteKickController.js");

//control vote kick
let isVoteKickInProgress = false;
const VOTE_KICK_LABEL = "!votekick";

let voteKickController;
client.on("ready", () => {
    voteKickController = new VoteKickController(client);
});
function a(){
    let command = {};
    command.content = "!votekick JNymiD Chen";
    voteKick(command);
    console.log(VoteKick);
}


function voteKick(message){
    let username = "";
    if (message.content.startsWith(VOTE_KICK_LABEL)) {
        username = message.content.substr(
            message.content.indexOf(VOTE_KICK_LABEL) + VOTE_KICK_LABEL.length,
            message.content.length
        ).trim();

        let user = getUser(username, client.users);
        console.log(user);
        return (user);
    }
}

function getUser(username, users){
    let toKickUser = null;
    users.forEach(user => {
        if(user.username === username && !user.bot){
            toKickUser = user;
        };
    });
    return toKickUser;
}

function isVoteKick(message, users){
    if(isVoteKick){
        // Already a vote kick in progress
        return false;
    }

    if(message.content.startsWith("!votekick")){

    }
}

//APP_BOT_USER TOKEN
client.login("");
