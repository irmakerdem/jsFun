const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');


// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
      // Return an array of just the names of kitties who are orange e.g.
        // ['Tiger', 'Snickers']

// kitties is an array of objects
// go to kitties array and use array method 
// select kitties based on color (orange)
// return names

orangePetNames(animals) {
  const orangePets = animals.filter((pet) => {
    // console.log(animals);
    // console.log("31", kitty)
    // console.log("32", kitty.color)
    return pet.color === 'orange';
  
  })
  // console.log("35", orangeCats)
  //orangeCats variable outputs an array with 2 objects
  // [
  //   { name: 'Tiger', age: 5, color: 'orange' },
  //   { name: 'Snickers', age: 8, color: 'orange' }
  // ]
  //go to orangeCats and grab each name
  const orangeAnimalNamesOnly = orangePets.map((pet) => {
    // console.log("43", cat.name);
    //cat is each cat object (no longer in array)
    // Tiger
    // Snickers
    return pet.name;
  })
  // console.log("47", orangeCatNamesOnly);
  return orangeAnimalNamesOnly;
},
// CHAINING FILTER AND MAP
//   orangePetNames() {
//     const orangeKitties = kitties.filter((kitty) => {
//       return kitty.color === 'orange';
//     }).map((cat) => {
//       return cat.name
//     })
//     return orangeKitties
//   },

  sortByAge(animals) {
    //by default sort() sorts array by ascending

      // const sortedByAge = kitties.sort((firstCat, secondCat) => secondCat.age - firstCat.age)
      // return sortedByAge;
    
      const sortedByAge = animals.sort((firstPet, secondPet) => {
        return secondPet.age - firstPet.age
      })

      return sortedByAge;

    // Sort the kitties by their age
    // sort from oldest to youngest
    // how to sort after getting each cat?
    // Use .sort() ??

  },

  growUp(animals) {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

 
// increase each cats age by 1
// input: array of cats objects
// output: return an array of older cats objects
// use .map()

    const olderPet = animals.map((pet) => {
      pet.age += 2;
      return pet;
    })
    return olderPet;
  }
};

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs(clubs) {
    // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    //input: array of objects
    //output: object
    //get access to all members
    //when you do a forEach, you still have access to acc!!!
    //ensure there is no rewriting of each club everytime forEach iterates

    const newMembers = clubs.reduce((acc, cur) => {
      cur.members.forEach((member) => {
        // console.log(member)
        if(!acc[member]) {
          acc[member] = [cur.club]
        // console.log(acc)
        } else {
          acc[member].push(cur.club)
        }
      })
     // console.log("37", acc)
      return acc
    }, {})
    return newMembers
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    // input: mods array of 4 objects with 3 keys
    // output: array of 4 objects (same length as original array) with 2 keys
    // map()?
    // create new key studentsPerInstructor and assign it to students / instructors
    
    const newArray = mods.map((modObj) => {
      // console.log(modObj)
      const shortObj = {
        mod: modObj.mod, 
        studentsPerInstructor: modObj.students/modObj.instructors
      }
      return shortObj
    })
      return newArray;
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

  //input: cakes array of objects
  //output: cakes array of objects with just flavor and inStock
  //map()

  const minimizedCakeList = cakes.map((cake) => {
    const newCake = {
      flavor: cake.cakeFlavor,
      inStock: cake.inStock
    }
    return newCake;
  })
    return minimizedCakeList;


  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    //input: cakes array of objects
    //output: cakes array of only ones in stock
    //filter()

    const inStockCakes = cakes.filter((cake) => {
      // console.log(cake.inStock)
      return cake.inStock;
    })
    return inStockCakes;

  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    //input: cake array of objects
    //output: return a single number of 59 
    //reduce()
    //

    const newCakes = cakes.reduce((totalInv, cake) => {
      // console.log(cake.inStock)
      totalInv += cake.inStock;
      return totalInv;
    }, 0)
    return newCakes;


  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

  //input: cakes array of objects
  //output: array of toppings (unique ones)
  //forEach()
  //includes()
  const everySingleTopping = [];

  const ourToppings = cakes.forEach((cake) => {
    cake.toppings.forEach((top) => {
      if (!everySingleTopping.includes(top)) {
        everySingleTopping.push(top)
      }
    })
  })
  return everySingleTopping;
  },

  groceryList() {
    // I need to make a grocery list. 
    //Please give me an object where the keys are
    // each topping, and the values are the amount of that 
    //topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

  //input: cakes array of objects
  //output: object with ALL toppings with amounts
  //forEach to get all toppings
  //count number of times each topping is mentioned
  //reduce to get one object

  const everySingleTopping = [];

  const ourToppings = cakes.forEach((cake) => {
    // console.log(cake)
    cake.toppings.forEach((top) => {
    // console.log(top)
      everySingleTopping.push(top)
      // console.log(everySingleTopping)
    })
  })
  // return everySingleTopping;
  const countOccurences = everySingleTopping.reduce((list, topp) => {
   //use bracket notation to create a topp key and give value of 1 or +1
    if (list[topp]) {
      list[topp] += 1
    } else {
      list[topp] = 1
    }
    return list
    }, {})
  
    return countOccurences

  }
};
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    //input: array with 8 objects
    //output: array of 4 objects that are just FE
    //filter()

    const onlyFE = classrooms.filter(room => {
      return room.program === "FE"
    })
    return onlyFE
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    //input: classrooms array with 8 objects
    //output: object with 2 properties


  //SOLUTION #1
  //   const onlyFE = classrooms.filter(room => {
  //     return room.program === "FE"
  //   })
  
  //   const onlyBE = classrooms.filter(room => {
  //     return room.program === "BE"
  //   })
  
  //   const newObj = {
  //     feCapacity: 0,
  //     beCapacity: 0
  //   }
  
  //   // console.log("initial", newObj)
  //   onlyFE.forEach((feRoom) => {
  //     // console.log("before", newObj)
  //     newObj.feCapacity += feRoom.capacity
  //      // console.log("after", newObj)
  //   })
  
  //   onlyBE.forEach((beRoom) => {
  //     // console.log("beforeeeeee BE", newObj)
  //     newObj.beCapacity += beRoom.capacity
  //      // console.log("afterrrrr BE", newObj)
  //   })
  // return newObj
 

  //SOLUTION #2
  const newObj = {
    feCapacity: 0,
    beCapacity: 0
  }

  classrooms.forEach((room) => {
    if(room.program === "FE") {
      newObj.feCapacity += room.capacity
    } else {
      newObj.beCapacity += room.capacity
    }
  })
  return newObj





   //SOLUTION #3
  //  const ourClassrooms = classrooms.reduce((acc, cur) => {
  //     if (!acc.feCapacity) {
  //       acc.feCapacity = 0
  //     }
  //     if (!acc.beCapacity) {
  //       acc.beCapacity = 0
  //     }
  //     if(cur.program === "FE") {
  //       acc.feCapacity += cur.capacity
  //     } else {
  //       acc.beCapacity += cur.capacity
  //     }
  //     return acc
  //   },{})

  // return ourClassrooms



  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const sortedArr = classrooms.sort((a, b) => {
      return a.capacity-b.capacity
    })

    return sortedArr
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence(books) {
    // Your function should access the books data through a parameter (it is being passed as an argument in the test file)
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']

  //input: array of 19 objects
  //output: array of strings (titles that are NOT horror or true crime)

    const newBooks = books.filter((book) => {
      return book.genre !== "Horror" && book.genre !== "True Crime"
    })
  
    const bestBooks = newBooks.map((book) => {
      return book.title
    })
  
    return bestBooks

  },
  getNewBooks(books) {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

 //input: array of 19 objects
  //output: array of objects (published >= 1990) and
  
  const newBooks = books.filter((book) => {
    return book.published >= 1990
  })

  const bestBooks = newBooks.map((book) => {
    return { 
      title: book.title, 
      year: book.published 
    }
  })

  return bestBooks
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    //input: array of objects
    //output: array of numbers

    //get ave of low and high per object
    //put all in empty array


    const getTemp = weather.map((place) => {
      // console.log("place", place.temperature)
      aveTemp = (place.temperature.high + place.temperature.low) / 2
      return aveTemp
    })

    return getTemp
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

      //input: array of 10 objects
    //output: array of 3 strings

      //type === "sunny" || type === "mostly sunny" --> contains "sunny"??
      //make empty array 
      //`${location} is ${type}.`

      const sunOnly = weather.filter((place) => {
        // return place.type === "sunny" || place.type === "mostly sunny"
        return place.type.includes("sunny")
      })

      const lastSun = sunOnly.map((place) => {
        // console.log("place", `${place.location} is`)
        return `${place.location} is ${place.type}.`
      })
      
      return lastSun
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

      //input: array of objects
      //output: 1 object with highest humidity
      //sort high to low, return high

      const highHum = weather.sort((a,b) => {
        return b.humidity - a.humidity
      })
      return highHum[0]




      //IF there were multiple locations with same high humidity:
      // const highHum = weather2.sort((a,b) => {
      //   return b.humidity - a.humidity
      // })
    
      // const final = highHum.filter((place) => {
      //   // return place.humidity === highHum[0].humidity
      //   return place.humidity === highHum[0].humidity
      // })
    
      // return final


  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

  //input: array of objects
    //output: object with 2 properties (each property is an array)
    //visited property T/F

    const obj = {
      parksToVisit: [],
      parksVisited: []
    }
      
    const getVisitedParks = nationalParks.filter((yes) => {
      if(yes.visited) {
        obj.parksVisited.push(yes.name)
      }
    })
    
    const getToVisitParks = nationalParks.filter((no) => {
      if(!no.visited) {
        obj.parksToVisit.push(no.name)
      }
    })
    
    return obj
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]


    //input: array of 6 objects
    //output: array of 6 objects
    //map?

    // { location: "name" }
    // place.location: place.name 

    const getParks = nationalParks.map((place) => {
      // console.log(place)
      return {[place.location]: place.name}
    })
    return getParks
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

//input: array of 6 objects
//output: array of strings
//grab all activities
  //activities.forEach()
  //push to empty array
//ensure no duplicates
  //start with an empty array
  //check if activity exists in array
    //if not, add to array
    //if it doesn't, do nothing with activity (dont add to array)
//reduce?

  const allActivities = nationalParks.reduce((uniqueActivitiesArr, park) => {
    park.activities.forEach((activity) => {
      if(!uniqueActivitiesArr.includes(activity)) {
        uniqueActivitiesArr.push(activity)
      }
    })
    // console.log(uniqueActivitiesArr)
    return uniqueActivitiesArr
  }, [])
  return allActivities
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    //input: breweries array of objects
    //output: single number (sum of # of items in each beers array)
    //reduce?

    const allbeers = breweries.reduce((sum, beer) => {
      // console.log("sum", sum)
      // console.log(beer.beers.length)
      //return each beer object
      //how to get all number of objects?
      sum += beer.beers.length
      return sum
    }, 0)

    return allbeers;
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    //input: breweries array of objects
    //output: array of objects

    //map?
    //manually create a new object with manual keys?
    //beer.beers.length per brewery

    const organizedBeers = breweries.map((brewery) => {
      // console.log(brewery.beers.length)
    
    const shortObj = {
      name: brewery.name,
      beerCount: brewery.beers.length,
    }
    return shortObj;
    })
    return organizedBeers;
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    //input: breweries array of objects
    //output: object of 1 beer
    //reduce to get single beer object
    //highest abv


  ///SOLUTION #1
    const highestAbv = breweries.reduce((acc, cur) => {
      cur.beers.forEach((beer) => {
        acc.push(beer)
        // console.log("we are here", acc)
      })
      // console.log("we are here", acc)
      return acc
    }, [])

    highestAbv.sort((a, b) => {
      return b.abv-a.abv
    })
    return highestAbv[0]




//SOLUTION #2
  // const allBeers = [];

  // const beerplaces = breweries.forEach((brewery) => {
  //   brewery.beers.forEach((beer) => {
  //     if(!allBeers.includes(beer)) {
  //       allBeers.push(beer)
  //     }
  //     allBeers.sort((a, b) => {
  //       return b.abv-a.abv
  //     })
  //   })
  // })
  // return allBeers[0]

  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

  //input1: array of 9 objects(instructors)
    //name
  ///input2: array of 4 objects (cohorts)
    //studentCount
  //output: array of 9 objects 
  //how to use 'module' in both arrays??

    const newArr = instructors.map((teacher) => {
      // console.log("t", teacher)
      const countFind = cohorts.find((group) => {
        // console.log("g", group)
        return group.module === teacher.module
      })
      return {
        name: teacher.name,
        studentCount: countFind.studentCount
      }
    })
    return newArr
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    //   cohort1806: 15,
    //   cohort1804: 7,
    //   cohort1803: 10,
    //   cohort1801: 9
    // })

  //input1: array of 9 objects(instructors)
  //input2: array of 4 objects (cohorts)
  //output: object of 4 key-value pairs

  //# of students/# of teachers (per module)
  //module as connector
  //cohorts.reduce
  //instructors.filter


  //SOLUTION #1
  // let newObj = {}
  // cohorts.forEach((cohorttt) => {
  //   const instructorNum = instructors.filter((teacher) => {
  //     return teacher.module === cohorttt.module
  //   })
  //   const cohortName = `cohort${cohorttt.cohort}`
  //   const ratio = cohorttt.studentCount / instructorNum.length
  //   newObj[cohortName] = ratio
  // })
  // // console.log(newObj)
  // return newObj


  //SOLUTION #2
  const cohortThing = cohorts.reduce((acc, cohorttt) => {

    const instructorNum = instructors.filter((teacher) => {
      return teacher.module === cohorttt.module
    })

    const cohortName = `cohort${cohorttt.cohort}`

    const ratio = cohorttt.studentCount / instructorNum.length

    acc[cohortName] = ratio

    return acc
  },{})

  return cohortThing



  //WORKS BUT DO NOT USE!!!!
  // const instructorThing = instructors.reduce((acc, cur) => {
  //   // console.log(cur)
  //   const cohortThing = cohorts.forEach((cohorttt) => {
  //     // console.log(cohorttt)
  //     const instructorNum = instructors.filter((teacher) => {
  //       return teacher.module === cohorttt.module
  //     // console.log(instructorNum)
  //     // console.log(instructorNum.length)
  //     })
  //        // console.log(instructorNum)
  //     const cohortName = `cohort${cohorttt.cohort}`
  //     // console.log(cohortName)
  //     const ratio = cohorttt.studentCount / instructorNum.length
  //     // console.log(cohorttt.studentCount)
  //     // console.log(instructorNum.length)
  //     // console.log(ratio)
  //     acc[cohortName] = ratio
  //   })
  //     console.log(acc)
  //   // console.log("966", cohortThing)
  //   return acc
  // }, {})
  //   return instructorThing
  },

  

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

   



// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    // { bossName: 'Scar', sidekickLoyalty: 16 },
    // { bossName: 'Ursula', sidekickLoyalty: 20 },
    // { bossName: 'Jafar', sidekickLoyalty: 3 } 
    // ]

    const getBosses = Object.values(bosses)
    // console.log(getBosses)
    
    const newBoss = getBosses.map((boss) => {
      return {
        bossName: boss.name, 
        sidekickLoyalty: 0
      }
    })
    // console.log("newBoss", newBoss)
  
    const newSide = sidekicks.forEach((sidePerson) => {
      // console.log("sidePerson", sidePerson)
      newBoss.forEach((bossPerson) => {
        if(bossPerson.bossName === sidePerson.boss) {
          bossPerson.sidekickLoyalty += sidePerson.loyaltyToBoss
        }
      })
    })
    return newBoss
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const constellationKeys = Object.keys(constellations);

    const filteredStars = stars.filter((star) => {
      return constellationKeys.includes(star.constellation.toLowerCase())
    });

    return filteredStars;
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113


    //input1: characters array of 4 objects
    //input2: weapons object of 6 key-values
    //output: single number (sum of damage inside weapons object but counting occurences of each weapon)
    //reduce

    const getChar = characters.reduce((acc, cur) => {
      cur.weapons.forEach((tool) => {
        acc += weapons[tool].damage
      })
      return acc
    },0)

    return getChar
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}


    //input: characters array of objects
    //input2: weapons object of objects
    //output: array of 4 objects (key  is character name: value is object)

    const getChar = characters.reduce((acc, cur) => {

      const newObj = {
        [cur.name]: {damage: 0, range: 0}
      }
      
      cur.weapons.forEach((tool) => {
        newObj[cur.name].damage += weapons[tool].damage
        newObj[cur.name].range += weapons[tool].range
      })
      
      acc.push(newObj)
      
      return acc
    },[])
    
    return getChar
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    //problem: which humans are not in the movies casts arrays
    //input: movies (array) and humans (object)
    //output: array of human objects
    //reduce and filter
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
