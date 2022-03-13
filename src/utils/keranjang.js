import axios from "axios";
import swal from "sweetalert";
import BASE_URL from "./constata";

const keranjang = async (produk) => {
  let pesanan = {
    jumlah: 1,
    total_harga: produk.harga,
    product: produk,
  };

  const popUpPesanan = () =>
    swal({
      title: "Berhasil",
      text: "Masuk Keranjang " + produk.nama,
      icon: "success",
      button: "Oke",
    });

  await axios
    .get(BASE_URL + "keranjangs?product.id=" + produk.id)
    .then(async (res) => {
      if (res.data.length === 0) {
        await axios
          .post(BASE_URL + "keranjangs", pesanan)
          .then(() => popUpPesanan())
          .catch((error) => console.log(error));
      } else {
        pesanan = {
          jumlah: res.data[0].jumlah + 1,
          total_harga: res.data[0].total_harga + produk.harga,
          product: produk,
        };

        await axios
          .put(BASE_URL + "keranjangs/" + res.data[0].id, pesanan)
          .then(() => popUpPesanan())
          .catch((error) => console.log(error));
      }
    })
    .catch((error) => console.log(error));
};

export default keranjang;
