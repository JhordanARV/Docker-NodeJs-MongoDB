const connectMQ = require('./connection');


producer();


async function producer(){

    const queue = "employees";
    let msgs = [
        {name: "Jhordan", "empresa": "Wekall", "slug": "EXT"},
        {name: "Juan", "empresa": "RepartoSAS", "slug": "INT"}
    ]
    try {
        let {conn, channel} = await connectMQ();

        const res = await channel.assertQueue(queue);
        console.log("Queue created");

        for (const msg in msgs) {
            await channel.sendToQueue(queue, Buffer.from(JSON.stringify(msgs[msg])));
            console.log("Message sent to queue ", queue);
        }

    } catch (error) {
        console.log("Error -> ", error);
    }
}