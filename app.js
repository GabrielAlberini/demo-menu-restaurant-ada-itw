// Datos de las pizzas
const pizzas = [
  {
    name: "Pizza Margherita",
    image: "./assets/marguerita.png",
    ingredients: "Tomate, Mozzarella, Albahaca",
    price: "$10",
    historia:
      "Creada en honor a la reina Margherita de Saboya en 1889, con los colores de la bandera italiana.",
  },
  {
    name: "Pizza Hawaiana",
    image: "./assets/hauaiana.png",
    ingredients: "Jamón, Piña, Queso",
    price: "$12",
    historia:
      "Inventada por el chef Sam Panopoulos en Ontario, Canadá, en 1962, inspirada en sabores tropicales.",
  },
  {
    name: "Pizza Vegetariana",
    image: "./assets/vegetariana.png",
    ingredients: "Pimientos, Champiñones, Cebolla",
    price: "$8",
    historia:
      "Originada en la cocina italiana, se popularizó en la década de 1980 como alternativa saludable.",
  },
  {
    name: "Pizza Barbacoa",
    image: "./assets/barbacoa.png",
    ingredients: "Carne de res, Salsa Barbacoa, Cebolla",
    price: "$15",
    historia:
      "Inspirada en los sabores ahumados de la barbacoa, ganó popularidad en la cultura culinaria estadounidense.",
  },
  {
    name: "Pizza de Pollo BBQ",
    image: "./assets/pollo_bbq.png",
    ingredients: "Pollo, Salsa BBQ, Cebolla",
    price: "$13",
    historia:
      "Una variante moderna que combina el sabor ahumado de la barbacoa con la jugosidad del pollo.",
  },
  {
    name: "Pizza de Pepperoni",
    image: "./assets/pepperoni.png",
    ingredients: "Pepperoni, Queso",
    price: "$11",
    historia:
      "Adaptación estadounidense de la salamis picante italiana, se volvió una favorita en la década de 1900.",
  },
  {
    name: "Pizza de Jamón y Champiñones",
    image: "./assets/jamon_champinones.png",
    ingredients: "Jamón, Champiñones, Queso",
    price: "$11",
    historia:
      "Combinación clásica que se remonta a las pizzerías italianas tradicionales, apreciada por su sencillez.",
  },
  {
    name: "Pizza de Cuatro Quesos",
    image: "./assets/cuatro_quesos.png",
    ingredients:
      "Queso Gorgonzola, Queso Parmesano, Queso Mozzarella, Queso Azul",
    price: "$14",
    historia:
      "Originada en el norte de Italia, su decadente mezcla de quesos se popularizó en la década de 1970.",
  },
  {
    name: "Pizza Marinara",
    image: "./assets/marinara.png",
    ingredients: "Tomate, Ajo, Orégano, Aceite de Oliva",
    price: "$9",
    historia:
      "Una de las primeras pizzas napolitanas, con raíces en el siglo XVIII, inicialmente consumida por pescadores.",
  },
  {
    name: "Pizza de Carne y Champiñones",
    image: "./assets/carne_champinones.png",
    ingredients: "Carne, Champiñones, Cebolla",
    price: "$13",
    historia:
      "Fusión de sabores carnívoros y terrosos, popular en la cocina italiana contemporánea.",
  },
  {
    name: "Pizza Mexicana",
    image: "./assets/mexicana.png",
    ingredients: "Carne molida, Jalapeños, Maíz, Frijoles",
    price: "$12",
    historia:
      "Inspirada en los sabores vibrantes de México, fue adaptada a la pizza en restaurantes tex-mex en Estados Unidos.",
  },
  {
    name: "Pizza de Espinacas y Queso Feta",
    image: "./assets/espinacas_queso_feta.png",
    ingredients: "Espinacas, Queso Feta, Tomate, Aceitunas",
    price: "$11",
    historia:
      "Nacida de la cocina griega, se convirtió en una opción popular para los amantes de la cocina mediterránea.",
  },
  {
    name: "Pizza Napolitana",
    image: "./assets/napolitana.png",
    ingredients: "Anchoas, Aceitunas, Tomate, Orégano",
    price: "$10",
    historia:
      "Remontándose al siglo XVIII en Nápoles, Italia, se convirtió en la base de las pizzas modernas clásicas.",
  },
  {
    name: "Pizza de Champiñones y Pimientos",
    image: "./assets/champinones_pimientos.png",
    ingredients: "Champiñones, Pimientos, Cebolla",
    price: "$11",
    historia:
      "Una combinación simple y deliciosa que se destaca por su equilibrio de sabores terrosos y dulces.",
  },
  {
    name: "Pizza de Pesto",
    image: "./assets/pesto.png",
    ingredients: "Salsa Pesto, Tomate, Queso Parmesano",
    price: "$12",
    historia:
      "Originada en Génova, Italia, su fresco sabor a albahaca y nueces la convirtieron en un favorito moderno.",
  },
];

// Función para mostrar las tarjetas de las pizzas
// Función para mostrar las tarjetas de las pizzas
const showPizzas = () => {
  const pizzasContainer = document.getElementById("pizzasContainer");

  pizzas.forEach((pizza) => {
    const card = document.createElement("div");
    card.classList.add(
      "card",
      "rounded-md",
      "shadow-md",
      "overflow-hidden",
      "relative"
    );
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content", "p-4");

    const img = document.createElement("img");
    img.src = pizza.image;
    img.alt = pizza.name;
    img.classList.add("w-full", "h-48", "object-cover");

    const title = document.createElement("h3");
    title.classList.add("text-xl", "font-bold", "mt-2");
    title.textContent = pizza.name;

    const ingredients = document.createElement("p");
    ingredients.classList.add("text-gray-700");
    ingredients.textContent = `Ingredientes: ${pizza.ingredients}`;

    const price = document.createElement("p");
    price.classList.add("text-gray-700");
    price.textContent = `Costo: ${pizza.price}`;

    const historia = document.createElement("p");
    historia.classList.add(
      "absolute",
      "w-full",
      "h-full",
      "top-0",
      "left-0",
      "flex",
      "items-center",
      "justify-center",
      "opacity-0",
      "hover:opacity-100",
      "transition-opacity",
      "duration-300",
      "bg-black",
      "bg-opacity-80",
      "text-white",
      "text-xl",
      "p-4"
    );
    historia.textContent = pizza.historia;

    cardContent.appendChild(img);
    cardContent.appendChild(title);
    cardContent.appendChild(ingredients);
    cardContent.appendChild(price);
    card.appendChild(cardContent);
    card.appendChild(historia);
    pizzasContainer.appendChild(card);
  });
};

// Mostrar las tarjetas de las pizzas al cargar la página
document.addEventListener("DOMContentLoaded", showPizzas);

// Mostrar las tarjetas de las pizzas al cargar la página
document.addEventListener("DOMContentLoaded", showPizzas);
