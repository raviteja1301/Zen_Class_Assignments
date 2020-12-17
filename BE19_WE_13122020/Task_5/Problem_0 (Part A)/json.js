var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   };
   // 1. Add height and weight to Fluffy
   cat.height='14';
   cat.weight='7';
   // 2.Fluffy name is spelled wrongly. Update it to Fluffyy
   cat.name='Fluffyy';
   
   console.log(cat);

   // 3.List all the activities of Fluffyy’s catFriends.
   for (let i in cat.catFriends)
   {
       console.log(cat.catFriends[i].activities);
   }

   // 4. Print the catFriends names.
   for (let i in cat.catFriends)
   {
       console.log(cat.catFriends[i].name);
   }

   // 5. Print the total weight of catFriends
   let totalweight=0;
   for (let i in cat.catFriends)
   {
       totalweight+=cat.catFriends[i].weight; 
   }
   console.log(totalweight);

   // 6. Print the total activities of all cats (op:6)
   let count=0;
   for (let i in cat.activities)
   {
       count++;
   }
   for (let i in cat.catFriends)
   {
       for(let j in cat.catFriends[i].activities)
       {
           count++;
       }
   }
   console.log(count);

   // 7. Add 2 more activities to bar & foo cats
   cat.catFriends[0].activities.push("shout","run");
   cat.catFriends[1].activities.push("exercise","Chase");
   console.log(cat);

   // 8. Update the fur color of bar
   cat.catFriends[0].furcolor="brown";
   console.log(cat);

