import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ListCategories from "./ListCategories";
import Hasil from "./Hasil";
import DaftarProduk from "./DaftarProduk";
import axios from "axios";
import keranjang from "../utils/keranjang";
import BASE_URL from "../utils/constata";

const Main = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [dataCategories, setDataCategories] = useState([]);
  const [categoriesId, setCategoriesId] = useState(1);
  const [listPesanan, setListPesanan] = useState([]);

  const handleListCategories = (id) => {
    setCategoriesId(id);
  };

  const handleProdukClick = async (produk) => {
    keranjang(produk);
  };

  useEffect(() => {
    const getProducts = async () => {
      let responseJson = [];
      try {
        responseJson = await axios.get(
          BASE_URL + "products?category.id=" + categoriesId
        );
      } catch (error) {
        console.log("Ada yang " + error);
      } finally {
        setDataProduct(responseJson.data);
      }
    };

    const getCategories = async () => {
      let responseJson = [];
      try {
        responseJson = await axios.get(BASE_URL + "categories");
      } catch (error) {
        console.log("Ada yang " + error);
      } finally {
        setDataCategories(responseJson.data);
      }
    };

    const getPesanans = async () => {
      let responseJson = [];
      try {
        responseJson = await axios.get(BASE_URL + "keranjangs");
      } catch (error) {
        console.log("Ada yang " + error);
      } finally {
        setListPesanan(responseJson.data);
      }
    };

    getProducts();
    getCategories();
    getPesanans();
  }, [categoriesId]);

  return (
    <Container className="mt-3">
      <Row>
        {dataCategories && (
          <ListCategories
            categories={dataCategories}
            handleClick={handleListCategories}
            categoriesActive={categoriesId}
          ></ListCategories>
        )}
        {dataProduct && (
          <DaftarProduk
            produk={dataProduct}
            handleClick={handleProdukClick}
          ></DaftarProduk>
        )}
        <Hasil pesanan={listPesanan}></Hasil>
      </Row>
    </Container>
  );
};

export default Main;
