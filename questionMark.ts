// ? : ternary operator : decision making
// ?? : nullish coalescing operator : null/undefined
// ?. optional chaining

//1.  ? : ternary operator 
const biyerJonnoEligible = (age: number) => {
  //   if (age >= 21) {
  //     console.log("You are eligible");
  //   } else {
  //     console.log("You are not eligible !");
  //   }

  const result = age >= 21 ? "You are eligible" : "You are not eligible !";

  console.log(result);
};
biyerJonnoEligible(21);


//2. ?? : nullish coalescing operator 
const userTheme = "Green theme";
const selectedTheme = userTheme ?? "Light theme";
console.log(selectedTheme);

// Check ternary and nullish
const isAuthenticated = "";
const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest !";
const resultWithNulish = isAuthenticated ?? '"You are guest !';
console.log({ resultWithTernary }, { resultWithNulish });

//3. optional chaining

const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string;
  };
} = {
  address: {
    city: "Dhaka",
    town: "Banani",
  },
};

const postalCode = user?.address?.postalCode;
console.log(postalCode);