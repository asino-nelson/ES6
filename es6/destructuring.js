// Object destructuring

const address = {
  country: "",
  city: "",
  street: "",
};

const country = address.country;
const city = address.city;
const street = address.street;

// the above code can be destructured into the code below

const { street: st, city: cty, country: cntry } = address;
