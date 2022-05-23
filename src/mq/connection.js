const amqp = require('amqplib');

let conn = null;
let channel = null;

const rabbitSettings = {
    protocol: 'amqp',
    hostname: 'localhost',
    port: 5672,
    username: 'idkall',
    password: 'Idkall2022*',
    vhost: '/',
    authMechanism: ['PLAIN', 'AMQPLAIN', 'EXTERNAL']
}


async function connectMQ(){

    try {
        conn = await amqp.connect(rabbitSettings);
        console.log("Connetion created");

        channel = await conn.createChannel();
        console.log("Channel created");

        return {conn, channel}

    } catch (error) {
        console.error("Error --> ", error);
    }
}

module.exports = connectMQ;

