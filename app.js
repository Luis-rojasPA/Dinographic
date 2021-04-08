    // Create Dino Constructor
    function Dino(s, weight, h, d, when, where, fact) {
        this.species = s,
        this.weight = weight,
        this.height = h,
        this.diet = d,
        this.when = when,
        this.where = where,
        this.fact = fact
    }

    // Create Dino Objects

        let newDino = new Dino(
                                
                              );

    // Use IIFE to get human data from form

    (function () 
    {
        const humanName     = document.getElementById('name').value;
        const humanHeight   = Number(document.getElementById('inches').value) +
                              Number(document.getElementById('feet').value) * 12;
        const humanWeight   = document.getElementById('weight').value;
        const humanDiet     = document.getElementById('diet').value;

        return humanArray = [humanName, humanHeight, humanWeight, humanDiet];
    }
    )();

    // Create Human Object

    let human = 
    {
        name:   "",
        height: 0,
        weight: 0,
        diet:   ""
    }

    human.name   = humanArray[0];
    human.height = humanArray[1];
    human.weight = humanArray[2];
    human.diet   = humanArray[3]

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic

