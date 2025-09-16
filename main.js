// ! snack 1
// console.log("snack 1");

// const hamburger = { name: "Cheese Burger", weight: 250 };
// const secondBurger = hamburger;
// secondBurger.name = "Double Cheese Burger";
// secondBurger.weight = 500;

// console.log(hamburger.name); // ? Double Cheese Burger
// console.log(secondBurger.name); // ? Double Cheese Burger
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? // ? 1 solo ogetto

// ! Snack 2
// console.log("Snack 2");

// const hamburger = {
//   name: "Cheese Burger",
//   weight: 250,
//   ingredients: ["Cheese", "Meat", "Bread", "Tomato"],
// };

// const secondBurger = { ...hamburger };
// secondBurger.ingredients[0] = "Salad";

// console.log(hamburger.ingredients[0]); // ? Salad
// console.log(secondBurger.ingredients[0]); // ? Salad
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?  // ? 2 ogetti creati ma con riferimento alle stesse proprietà annidate

// ! Snack 3
// console.log("Snack3");

// const hamburger = {
//   name: "Cheese Burger",
//   weight: 250,
//   maker: {
//     name: "Anonymous Chef",
//     restaurant: {
//       name: "Hyur's Burgers",
//       address: "Main Street, 123",
//       isOpen: true,
//     },
//     age: 29,
//   },
// };

// const secondBurger = structuredClone(hamburger);
// const thirdBurger = structuredClone(hamburger);

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? // ? 3 ogetti principali

// ! Snack 4
// console.log("Snack 4");

// const chef = {
//   name: "Chef Hyur",
//   age: 29,
//   makeBurger: (num = 1) => {
//     console.log(`Ecco ${num} hamburger per te!`);
//   },
// };

// const restaurant = {
//   name: "Hyur's Burgers",
//   address: {
//     street: "Main Street",
//     number: 123,
//   },
//   openingDate: new Date(2025, 3, 11),
//   isOpen: false,
// };

// Qual è il metodo migliore per clonare l’oggetto chef, e perché? // ?  Il metodo migliore è quello per shallow copy (...) perche cosi riesco a tener traccia anche della funzione

// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché? // ? Il metodo migliore è quello structureClone() perche riesco a mantenere anche gli ogetti complessi come quelli di tipo Date

// ! Code question 5

const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  maker: {
    name: "Anonymous Chef",
    restaurant: {
      name: "Hyur's Burgers",
      address: "Main Street, 123",
      isOpen: true,
    },
    age: 29,
  },
};

const newRestaurant = { ...hamburger.maker.restaurant };
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = { ...hamburger };
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); // ? Chef Hyur
console.log(secondBurger.maker.name); // ? Chef Hyur
console.log(hamburger.maker.restaurant.name); // ? Hyur's II
console.log(secondBurger.maker.restaurant.name); // ? Hyur's II

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console // ?

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice // ? 5

// ! Code question 6

const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
  restaurant: {
    name: "Hyur's Burgers",
    welcomeClient: () => {
      console.log("Benvenuto!");
    },
    address: {
      street: "Main Street",
      number: 123,
      showAddress: () => {
        console.log("Main Street 123");
      },
    },
    isOpen: true,
  },
};

// Qual è il metodo migliore per clonare l’oggetto chef, e perché? // ?

// const newChef = {
//   ...chef,
//   restaurant: {
//     ...chef.restaurant,
//     address: {
//       ...chef.restaurant.address,
//     },
//   },
// };

// console.log("Chef :", chef);
// console.log("New Chef :", newChef);

// 🎯 Snack (Bonus)
// Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.
function deepCopy(obj) {
  if (typeof obj !== "object") {
    return obj;
  }
  const copy = {};
  for (const key in obj) {
    const value = obj[key];
    if (typeof value !== "object") {
      copy[key] = value;
    } else {
      copy[key] = deepCopy(value);
    }
  }
  return copy;
}

const chefCopy = deepCopy(chef);
console.log(chefCopy);

// ⚠️ Serve usare una funzione ricorsiva! (fai un po’ di ricerca).
