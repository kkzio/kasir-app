import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import numberWithCommas from "../utils/numberWithCommas";

const DaftarProduk = (props) => {
  const { produk, handleClick } = props;
  return (
    <Col md={7} className="mb-4">
      <h1 className="title">Daftar Produk</h1>
      <hr />
      <Row
        md={2}
        style={{
          justifyContent: "space-between",
          gap: "1.5em",
          padding: "0 2%",
        }}
      >
        {produk.map((res) => (
          <Card
            className="shadow"
            key={res.id}
            onClick={() => handleClick(res)}
            style={{ width: "14rem", padding: "0", cursor: "pointer" }}
          >
            <Card.Img
              variant="top"
              src={`assets/images/${res.category.nama.toLowerCase()}/${
                res.gambar
              }`}
            />
            <Card.Body>
              <Card.Title>
                {res.nama} <strong>({res.kode})</strong>
              </Card.Title>
              <Card.Text>Rp. {numberWithCommas(res.harga)}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Col>
  );
};

export default DaftarProduk;
