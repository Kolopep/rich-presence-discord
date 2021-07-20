var rpc = require("discord-rpc")

const client = new rpc.Client({ transport: 'ipc' })

client.on('ready', () => {

	client.request('SET_ACTIVITY', {
		pid: process.pid,
		activity : {
			details : "Discord Help Bot SpaceX",
			assets : {
				large_image : "bad_girl",
				large_text : "tati"
			},
			buttons : [{label : "SpaceX Invite Link" , url : "https://discord.gg/ZffbQEm7pQ"}]
		}
	});


});

console.log('ready');
client.login({ clientId : process.env.TOKEN }).catch(console.error);
