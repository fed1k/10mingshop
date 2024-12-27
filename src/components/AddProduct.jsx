import React, { useState } from "react";
import { db, storage } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate()

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!name || !price) return;

    await addDoc(collection(db, "products"), { name, price });
    setName("");
    setPrice("");
    navigate("/")
  };

  return (
    <form onSubmit={handleAddProduct} className="p-4">
      <h1 className="text-xl pb-3 font-bold">Tovar Qo'shish</h1>
      <input
        type="text"
        placeholder="Tovar Nomi"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border py-1.5 px-2 rounded w-full"
      />
      <input
        type="number"
        placeholder="Narxi"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border rounded py-1.5 px-2 w-full my-3"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-1 rounded"
      >
        Saqlash
      </button>
    </form>
  );
};

export default AddProduct;
