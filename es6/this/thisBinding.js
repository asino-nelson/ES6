/*
the bind method returns a new instance 
of the function based on the parameter paseed in it
*/

const human = {
    name: "Nelson",
    walk() {
      console.log(this);
    },
  };
  
  const walk = human.walk.bind(human);
  
  console.log(walk);