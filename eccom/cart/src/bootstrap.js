import faker from "faker";

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;
  el.innerHTML = cartText;
}

// if(process.env.NODE_ENV === "development") {
//   console.log('dev?', process.env.NODE_ENV);
//   const el = document.querySelector("#cart-dev");
//   mount(el);
// }

export { mount };
