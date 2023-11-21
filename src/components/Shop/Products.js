import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummy_data = [
  {
    title: "My first Book",
    price: 600,
    description: "This is my first Book",
    id: "p1",
  },
  {
    title: "My second Book",
    price: 800,
    description: "This is my second Book",
    id: "p2",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy_data.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
