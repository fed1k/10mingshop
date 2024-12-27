import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchedProducts, setsearchedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      setProducts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    };
    fetchProducts();
  }, []);

  const handleSearch = ({ target }) => {
    const { value } = target;
    setSearchTerm(value);
    if (value) {

      const filtered = products.filter((product) => product.name.toLowerCase().startsWith(value.toLowerCase()));
      setsearchedProducts(filtered)
    } else {
      setsearchedProducts([])
    }
    // console.log(filtered);
    

  };

  const formatNumber = (numberString) => {
    const number = Number(numberString); // Convert the string to a number
    return new Intl.NumberFormat('en-US', { useGrouping: true }).format(number).replace(/,/g, ' ');
  };
  

  return (
    <div className="p-4">
      <input
        onChange={handleSearch}
        type="text"
        className="px-4 py-1.5 w-full rounded border"
        placeholder="Qidiruv"
      />
      {searchedProducts.length ? (
        <h1 className="text-xl font-bold py-3 ">Tovarlar</h1>
      ) : (
        <></>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {searchedProducts.map((product) => (
          <div key={product.id} className="border p-2 px-4 rounded">
            <h1 className="text-xl font-bold">{product.name}</h1>
            <p>{formatNumber(product.price)} uzs</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
