import { useState } from "react";
import "./App.css";
import { ProductCard } from "./ProductCard";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");

  const [totalProduct, setTotalProduct] = useState([]);

  const setNama = (event) => {
    setName(event.target.value);
  };

  const setDeskripsi = (event) => {
    setDesc(event.target.value);
  };

  const setHarga = (event) => {
    setPrice(parseInt(event.target.value));
  };

  const setProduct = () => {
    const newProduct = {
      namaProduk: name,
      hargaProduk: price,
      deskripsiProduk: desc,
    };

    setTotalProduct([...totalProduct, newProduct]);
    setName("");
    setPrice("");
    setDesc("");
  };

  return (
    <>
      <div
        style={{
          width: "400px",
          height: "200px",
          border: "1px solid blue",
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        <input
          style={{ display: "block", margin: "20px auto" }}
          type="text"
          placeholder="Masukkan Nama Produk"
          value={name}
          onChange={setNama}
        ></input>
        <input
          style={{ display: "block", margin: "20px auto" }}
          type="number"
          placeholder="Masukkan Harga Produk"
          value={price === 0 ? "" : price}
          onChange={setHarga}
        ></input>
        <input
          style={{ display: "block", margin: "20px  auto" }}
          type="text"
          placeholder="Masukkan Deskripsi Produk"
          value={desc}
          onChange={setDeskripsi}
        ></input>
        <button onClick={setProduct}>Tambah Produk</button>
      </div>
      {/* <ProductCard></ProductCard> */}
      {totalProduct.map((product) => {
        return (
          <ProductCard
            key={product.namaProduk}
            namaProduk={product.namaProduk}
            hargaProduk={product.hargaProduk}
            deskripsiProduk={product.deskripsiProduk}
          />
        );
      })}
    </>
  );
}

export default App;
