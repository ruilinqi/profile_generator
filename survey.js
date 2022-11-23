const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// What's your name? Nicknames are also acceptable :)
rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Thank you! Your name: ${answer}`);
  
  rl.question('What\'s an activity you like doing? ', (answer) => {
    console.log(`Thank you! The activity you like doing: ${answer}`);
    
    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`Thank you! while doing that, you listen to: ${answer}`);
      
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        console.log(`Thank you! Your favourite meal: ${answer}`);
      
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          console.log(`Thank you! Your favourite thing to eat for that meal: ${answer}`);
        
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            console.log(`Thank you! Your absolute favourite sport: ${answer}`);
          
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              console.log(`Thank you! Your superpower: ${answer}`);
            
              rl.close();
            });
          });
        });
      });
    });
  });
});

// What's an activity you like doing?
rl.question('What\'s an activity you like doing? ', (answer) => {
  console.log(`Thank you! The activity you like doing: ${answer}`);

   rl.close();
});
// // What do you listen to while doing that?
// rl.question('What do you listen to while doing that? ', (answer) => {
//   console.log(`Thank you! while doing that, you listen to: ${answer}`);

//   rl.close();
// });
// // Which meal is your favourite (eg: dinner, brunch, etc.)
// rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
//   console.log(`Thank you! Your favourite meal: ${answer}`);

//   rl.close();
// });
// // What's your favourite thing to eat for that meal?
// rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
//   console.log(`Thank you! Your favourite thing to eat for that meal: ${answer}`);

//   rl.close();
// });
// // Which sport is your absolute favourite?
// rl.question('Which sport is your absolute favourite? ', (answer) => {
//   console.log(`Thank you! Your absolute favourite sport: ${answer}`);

//   rl.close();
// });
// // What is your superpower? In a few words, tell us what you are amazing at!
// rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
//   console.log(`Thank you! Your superpower: ${answer}`);

//   rl.close();
// });