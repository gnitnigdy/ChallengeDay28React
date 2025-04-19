export function ProductCard(props) {
  return (
    <div style={{ width: "400px", height: "200px", border: "1px solid red" }}>
      <h3>{props.namaProduk}</h3>
      <h4>{props.hargaProduk}</h4>
      <h5>{props.deskripsiProduk}</h5>
    </div>
  );
}
