import React from "react";
import { Col, ListGroup } from "react-bootstrap";

const ListCategories = (props) => {
  const { categories, handleClick, categoriesActive } = props;

  return (
    <Col md={2} className="title">
      <h4>Daftar Kategori</h4>
      <hr />
      <ListGroup>
        {categories.map((res) => {
          return (
            <ListGroup.Item
              as="li"
              key={res.id}
              onClick={() => handleClick(res.id)}
              className={categoriesActive === res.id && "categorie-active"}
              style={{ cursor: "pointer" }}
            >
              {res.nama}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Col>
  );
};

export default ListCategories;
