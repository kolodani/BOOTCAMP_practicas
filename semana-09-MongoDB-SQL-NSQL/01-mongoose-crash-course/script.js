const mongoose = require ('mongoose');
const User = require ('./User');

mongoose.connect('mongodb+srv://kolodani:<PASSWORD>@cluster0.bqrlkq6.mongodb.net/test');

run()
async function run() {
    try{
        const user = await User.findOne({ name: 'Grover', email: 'test@test.com' });
        console.log(user);
        await user.save();
        console.log(user);
        // user.sayHi();
    } catch (e) {
        console.log(e.message);
    }
}

/*
run()
async function run() {
    try {
        // const user = await User.findById('634897c9ea7152608ae40e4e');
        const user = await User.where('age')
            .gt(12)
            .where('name')
            .equals('Grover the Great')
            .limit(1)
            .select('age');
        user[0].bestFriend = '634897c9ea7152608ae40e4e';
        await user[0].save();
        console.log(user);
    } catch (e) {
        console.log(e.message);
    }
}
*/

/*
run()
async function run() {
    User.findById().save();
    try {
        const user = await User.create({
            name: 'Grover',
            age: 28,
            email: 'TEST@test.com',
            hobbies: ['coding', 'reading', 'writing'],
            address: {
                street: '123 Sesame St',
                city: 'New York'
            }
        });
        user.createdAt = 5;
        await user.save();
        console.log(user);
    } catch (e) {
        console.log(e.message);
    }
    // user.name = 'Grover the Great';
    // await user.save();
    // const user = new User({name: 'kyle', age: 26});
    // await user.save();
}
*/