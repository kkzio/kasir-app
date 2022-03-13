import React from "react";
import { Badge, Col, ListGroup, Row } from "react-bootstrap";
import numberWithCommas from "../utils/numberWithCommas";

const Hasil = (props) => {
  const { pesanan } = props;

  return (
    <Col md={3}>
      <h1 className="title">Hasil</h1>
      <hr />
      <ListGroup variant="flush">
        {pesanan.length !== 0 &&
          pesanan.map((res) => (
            <ListGroup.Item key={res.id}>
              <Row>
                <Col xs={2}>
                  <h1 className="sub-heading">
                    <Badge pill bg="success">
                      {res.jumlah}
                    </Badge>
                  </h1>
                </Col>
                <Col>
                  <h1 className="sub-heading">{res.product.nama}</h1>
                  <p>Rp. {numberWithCommas(res.product.harga)}</p>
                </Col>
                <Col>
                  <strong style={{ float: "right" }}>
                    Rp. {numberWithCommas(res.total_harga)}
                  </strong>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Col>
  );
};

export default Hasil;
