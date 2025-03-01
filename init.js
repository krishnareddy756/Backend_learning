const mongoose = require('mongoose');
const Chat = require('./models/chat.js');
main()
.then(() => {
    console.log('Connected to the database');
})
.catch(err => console.log(err));


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats = [
    {
        from: 'John',
        to: 'Emma',
        message: 'Hey Emma, how have you been?',
        createdAt: new Date()
    },
    {
        from: 'Emma',
        to: 'John',
        message: 'I’m good, John! How about you?',
        createdAt: new Date()
    },
    {
        from: 'David',
        to: 'Sophia',
        message: 'Hi Sophia, are we still on for lunch tomorrow?',
        createdAt: new Date()
    },
    {
        from: 'Sophia',
        to: 'David',
        message: 'Yes, David! Looking forward to it!',
        createdAt: new Date()
    },
    {
        from: 'Michael',
        to: 'Olivia',
        message: 'Olivia, did you finish the project?',
        createdAt: new Date()
    },
    {
        from: 'Olivia',
        to: 'Michael',
        message: 'Michael! Just some final touches left.',
        createdAt: new Date()
    }
];

Chat.insertMany(allchats)
.then((res) => {
    console.log(res);
})
.catch(err => console.log(err));
