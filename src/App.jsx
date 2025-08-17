// import 'tailwindcss/tailwind.css'
import Card from './Card';

const items = [
  {
    img: "pexels-daan-stevens-66128-939331.jpg",
    name: "Sama",
    price: 9000,
    title: "MacBook Air 13 – M1 Chip",
    decs: "A sleek and lightweight laptop featuring a 14-inch Full HD display, 11th Gen Intel Core i7 processor, 16GB RAM, and 512GB SSD storage. Offers up to 15 hours of battery life and a premium metallic design, perfect for work and study.",
  },
  {
    img: "pexels-energepic-com-27411-159886.jpg",
    name: "Sama",
    price: 3000,
    title: "HP Spectre x360 – 13.5",
    decs: "A sleek and lightweight laptop featuring a 14-inch Full HD display, 11th Gen Intel Core i7 processor, 16GB RAM, and 512GB SSD storage. Offers up to 15 hours of battery life and a premium metallic design, perfect for work and study.",
  },
  {
    img: "pexels-hasanalbari-1229861.jpg",
    name: "Sama",
    price: 1000,
    title: "Lenovo ThinkPad X1 Carbon Gen 11 ",
    decs: "A sleek and lightweight laptop featuring a 14-inch Full HD display, 11th Gen Intel Core i7 processor, 16GB RAM, and 512GB SSD storage. Offers up to 15 hours of battery life and a premium metallic design, perfect for work and study.",
  },
  {
    img: "pexels-morningtrain-18105.jpg",
    name: "Sama",
    price: 7000,
    title: "MacBook Pro 16– M2 Pro ",
    decs: "A sleek and lightweight laptop featuring a 14-inch Full HD display, 11th Gen Intel Core i7 processor, 16GB RAM, and 512GB SSD storage. Offers up to 15 hours of battery life and a premium metallic design, perfect for work and study.",
  },
  {
    img: "pexels-picjumbo-com-55570-196655.jpg",
    name: "Sama",
    price: 10000,
    title: "Samsung Galaxy Book3 Pro",
    decs: "A sleek and lightweight laptop featuring a 14-inch Full HD display, 11th Gen Intel Core i7 processor, 16GB RAM, and 512GB SSD storage. Offers up to 15 hours of battery life and a premium metallic design, perfect for work and study.",
  },
  {
    img: "pexels-pixabay-459653.jpg",
    name: "Sama",
    price: 3600,
    title: "ASUS ROG Strix G16 ",
    decs: "A sleek and lightweight laptop featuring a 14-inch Full HD display, 11th Gen Intel Core i7 processor, 16GB RAM, and 512GB SSD storage. Offers up to 15 hours of battery life and a premium metallic design, perfect for work and study.",
  }
];

function App() {
  return (
    <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 lg:grid-cols-3 gap-7 p-4">
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  )
}

export default App;
