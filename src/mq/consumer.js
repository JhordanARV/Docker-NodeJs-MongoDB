const connectMQ = require('./connection');

consumer();

async function consumer(){

    const queue = "employees";
    const consumer = "INT";

    try {

        let {conn, channel} = await connectMQ();

        const res = await channel.assertQueue(queue);
        console.log("Queue created");

        console.log("Waiting for messages from ", consumer);

        channel.consume(queue, message => {
            let employee = JSON.parse(message.content.toString());
            console.log("Reiceved emplyee" , employee.name);
            //console.log(employee);

            if(employee.slug == consumer){
                channel.ack(message);
                console.log("Delete message from queue.. \n ", );
            }else{
                console.log("That message is not for me I'll not delete \n ", );
            }
        })

    } catch (error) {
        console.log("Error -> ", error);
    }
}