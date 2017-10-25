const VoteKickService = require("../service/VoteKickService.js");
const VOTE_KICK_LABEL = "!votekick";

class VoteKickController {

    constructor (Client) {
        this.voteKickService = new VoteKickService();
        this.client = Client;
        this.client.on("message", (message) => {
            if(message.content.startsWith(VOTE_KICK_LABEL)){
                message.channel.send("Voting to kick: " + voteKickService(message).username);
            }
        });
    }
}
module.exports = VoteKickController;