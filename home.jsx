import headphonesImg from "./headphones.jpg";
import watchImg from "./watch.webp";
import shoesImg from "./shoes.webp";

function Home() {
  const products = [
    {
      name: "Wireless Headphones",
      price: "₹1,499",
      image: headphonesImg,
      
    },
    {
      name: "Smart Watch",
      price: "₹2,999",
      image: watchImg,
      
    },
    {
      name: "Running Shoes",
      price: "₹1,999",
      image: shoesImg,
    }
  ];

  return (
    <div>
      <nav>
        <h2>ShopEasy</h2>

        <div>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <div className="hero">
        <h1>Welcome to ShopEasy</h1>
        <p>Find the best products at simple prices.</p>
      </div>

      <div className="products">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>{product.price}</p>

            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home; 
