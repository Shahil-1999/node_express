const EventEmmiter = require('events');

const event = new EventEmmiter();

// Now You make ur own events

// Listen Event, u can also call multiple function through one event.
event.on('sayMyname', () => {
    console.log("First name is Shahil");
});

event.on('sayMyname', () => {
    console.log("Middle name is Kumar");
});


event.on('sayMyname', () => {
    console.log("Last name is Chourasia");
});

event.emit("sayMyname");    //u have to use double quotes while calling function


// u can also pass parameters inside the callback
event.on("checkStatus", (statusCode, msg) => {
    console.log(`The Status Code is ${statusCode} and  Message is ${msg}`);
})
event.emit("checkStatus", 200, "ok")
