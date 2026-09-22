<script setup>
import ProductList from "../components/ProductCard.vue";
const DaftarProduk = [
  {
    id: 1,
    nama: "POCO F7",
    deskripsi: "512/8GB Snapdragon 897 Baterai 6500 MAh Fast Charge 90W",
    harga: 5799000,
    gambar: "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/y/i/6/-original-imahdpu7wqfgfryp.jpeg?q=90",
  },
  {
    id: 2,
    nama: "POCO X8 PRO MAX",
    deskripsi: "512/16GB | Snapdragon 990 | Baterai 8500 MAh | Fast Charge 90W | ",
    harga: 7999000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRad-zlA7cya1nC9fv03mbYAWAi3mcBuJAmkz4ZicMynwdTw1iJ8J8ingz2&s=10",
  },
  {
    id: 3,
    nama: "INFINIX NOTE 60 PRO+",
    deskripsi: "256/12GB | Snapdragon 7s Gen4 | Baterai 6500 MAh | Fast Charge 90W | ",
    harga: 5999000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_2cUxK0O9t42CsaNEkTgR1QYIbwyAQ7nBqNUrYwJrQ&s=10",
  },
  {
    id: 4,
    nama: "POCO X7",
    deskripsi: "512/12GB | MediaTek Dimensity 8400-Ultra | Baterai 6000 MAh | Hyper Charge 90W |",
    harga: 5499000,
    gambar: "https://m.media-amazon.com/images/I/61YsjBvrKmL._AC_SL1000_.jpg",
  },
  {
    id: 5,
    nama: "ROG PHONE 9 PRO",
    deskripsi: "1000/16GB |  Qualcomm Snapdragon 8 Elite | AMOLED 6.78 185 Hz. | Baterai 5800 MAh | Fast Charge 65W |",
    harga: 21999000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ZzmxJhyeDoMDJH89_fZw2UBkJmfmm8J4sx2zvk_Yfg&s",
  },
  {
    id: 6,
    nama: "IPHONE 17 PRO MAX",
    deskripsi: "256/8GB | Snapdragon G99 | Baterai 5000 MAh | Fast Charge 45W |",
    harga: 25499000,
    gambar: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR5LKtSKfk0K6RhzDDh37CkFjovxep-tCVO15buQXjmSpgzGlIGatt-7RGHqmHb6LvVxHRHUpU8jzlFaiHDiA7CuPi84oriHU3xBZyIDVqmnjpy_HMPd_QHuh-MnvDIcClA7Pr8CMdUJA&usqp=CAc",
  },
  {
    id: 7,
    nama: "POCO X6 PRO",
    deskripsi: "256/8GB | Snapdragon G99 | Baterai 5000 MAh | Fast Charge 45W |",
    harga: 5199000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgA12ajNtq8f38kcVHwyoy8DrqmkUiqBcZk9O7FfFoqQ&s=10",
  },
  {
    id: 8,
    nama: "VIVO X300",
    deskripsi: "256/8GB | Snapdragon G99 | Baterai 5000 MAh | Fast Charge 45W |",
    harga: 5199000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLolWKfog299dXLNAKEYJdTzSUklE80O-ZjUaovBWMZg&s=10",
  },
  {
    id: 9,
    nama: "VIVO T5 PRO 5G",
    deskripsi: "256/8GB | MediaTek Dimensity 7400-Turbo | Baterai 6500 MAh | Fast Charge 90W |",
    harga: 5199000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-eSlv6RO9WpC-m0kMb8r-fTkFP5jsMeN1AG9YtxlZbQ&s=10",
  },
  {
    id: 10,
    nama: "TECNO POVA 8 PRO",
    deskripsi: "256/8GB | MediaTek Dimensity 7400 Ultimate | Baterai 8000 MAh | Fast Charge 45W |",
    harga: 5999000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-aUS05ULjMNVBs4MYHXWReVo4S0wI9XGIMYJeZwqIAw&s=10",
  },
  {
    id: 11,
    nama: "MOTOROLA G86 POWER 5G ",
    deskripsi: "256/8GB | MediaTek Dimensity 7400 | Baterai 6720 MAh | Fast Charge 33W |",
    harga: 4399000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKSJXFmvGBS83WePN1UJ4g4dWY7whK5ZK3hwW6IV-UkQ&s=10",
  },
  {
    id: 12,
    nama: "TECNO CAMON 50",
    deskripsi: "256/8GB | MediaTek Helio G200 Ultimate | Baterai 6500 MAh | Super Charge 45W |",
    harga: 4199000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNV78Q_IjeiEPhvF1kObSfSyp5f8iqvRoPYnTYrUJNKg&s=10",
  },
  {
    id: 13,
    nama: "IQOO Z11X 5G",
    deskripsi: "256/8GB | Dimensity 7400 turbo | Baterai 7200 MAh | Fast Charge 44W |",
    harga: 5699000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXAV7t6uh65OfQEdUfieLf-JNOKBSBFZXXWrnjs9A5Q&s",
  },
  {
    id: 14,
    nama: "VIVO IQOO Z11 5G",
    deskripsi: "256/8GB |  Snapdragon 7s Gen 4  | Baterai 9020 MAh | Flash Charge 90W |",
    harga: 6799000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiIIaXlynIoN82EWfvQS6DGLiCsVJxqiFciM8gr1-RrQ&s=10",
  },
  {
    id: 15,
    nama: "VIVO X300",
    deskripsi: "256/8GB | Snapdragon G99 | Baterai 5000 MAh | Fast Charge 45W |",
    harga: 5199000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aO9MQq7zZYX2curgVm4_e_bmMHBH7PGSAQTc7mv1fQ&s=10",
  },
  {
    id: 13,
    nama: "IQOO Z11X 5G",
    deskripsi: "256/8GB | Dimensity 7400 turbo | Baterai 7200 MAh | Fast Charge 44W |",
    harga: 5699000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXAV7t6uh65OfQEdUfieLf-JNOKBSBFZXXWrnjs9A5Q&s",
  },
  {
    id: 13,
    nama: "IQOO Z11X 5G",
    deskripsi: "256/8GB | Dimensity 7400 turbo | Baterai 7200 MAh | Fast Charge 44W |",
    harga: 5699000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXAV7t6uh65OfQEdUfieLf-JNOKBSBFZXXWrnjs9A5Q&s",
  },
  {
    id: 13,
    nama: "IQOO Z11X 5G",
    deskripsi: "256/8GB | Dimensity 7400 turbo | Baterai 7200 MAh | Fast Charge 44W |",
    harga: 5699000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXAV7t6uh65OfQEdUfieLf-JNOKBSBFZXXWrnjs9A5Q&s",
  },
  
  
];
</script>
<template>
  <main>
    <h1>Product Hp Gaming Terbaik</h1>
    <div class="grid">
      <ProductList
        v-for="produk in DaftarProduk"
        :key="produk.id"
        :nama="produk.nama"
        :deskripsi="produk.deskripsi"
        :harga ="produk.harga"
        :gambar="produk.gambar"
      />
    </div>
  </main>
</template>
<style scoped>
.grid {
  margin-left: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
h1{
  text-align:center;
  background: linear-gradient(90deg, #243b80, #3f4fd3);
  color: white;
  padding: 30px;
  font-size:30px;
}
.deskripsi{
  color:blue;
}
</style>