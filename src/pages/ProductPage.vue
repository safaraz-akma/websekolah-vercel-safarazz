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
    deskripsi: "256/8GB | Snapdragon G99 | Baterai 5000 MAh | Fast Charge 45W | ",
    harga: 5999000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFnS57vJ8n0ugk2qv5H6x5akNHYOPJzTjO5GoTRspaug&s",
  },
  {
    id: 4,
    nama: "POCO X7",
    deskripsi: "256/8GB | Snapdragon G99 | Baterai 5000 MAh | Fast Charge 45W |",
    harga: 5499000,
    gambar: "https://m.media-amazon.com/images/I/61YsjBvrKmL._AC_SL1000_.jpg",
  },
  {
    id: 5,
    nama: "ROG PHONE 9 PRO",
    deskripsi: "256/8GB | Snapdragon G99 | Baterai 5000 MAh | Fast Charge 45W |",
    harga: 57499000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nzrmZWTmu0fgdtR-CohIY6BJeAxYzy_rPH2msgcz4g&s=10",
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
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r6teW-jCFQoS_PUoo70etXGJc9kOAA3IW5uSzsCZlw&s=10",
  },
  {
    id: 8,
    nama: "VIVO X300",
    deskripsi: "256/8GB | Snapdragon G99 | Baterai 5000 MAh | Fast Charge 45W |",
    harga: 5199000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aO9MQq7zZYX2curgVm4_e_bmMHBH7PGSAQTc7mv1fQ&s=10",
  },
  {
    id: 9,
    nama: "VIVO X300",
    deskripsi: "256/8GB | Snapdragon G99 | Baterai 5000 MAh | Fast Charge 45W |",
    harga: 5199000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aO9MQq7zZYX2curgVm4_e_bmMHBH7PGSAQTc7mv1fQ&s=10",
  },
  {
    id: 10,
    nama: "VIVO X300",
    deskripsi: "256/8GB | Snapdragon G99 | Baterai 5000 MAh | Fast Charge 45W |",
    harga: 5199000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aO9MQq7zZYX2curgVm4_e_bmMHBH7PGSAQTc7mv1fQ&s=10",
  },
  {
    id: 11,
    nama: "VIVO X300",
    deskripsi: "256/8GB | Snapdragon G99 | Baterai 5000 MAh | Fast Charge 45W |",
    harga: 5199000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aO9MQq7zZYX2curgVm4_e_bmMHBH7PGSAQTc7mv1fQ&s=10",
  },
  {
    id: 12,
    nama: "VIVO X300",
    deskripsi: "256/8GB | Snapdragon G99 | Baterai 5000 MAh | Fast Charge 45W |",
    harga: 5199000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aO9MQq7zZYX2curgVm4_e_bmMHBH7PGSAQTc7mv1fQ&s=10",
  },
  {
    id: 13,
    nama: "VIVO X300",
    deskripsi: "256/8GB | Snapdragon G99 | Baterai 5000 MAh | Fast Charge 45W |",
    harga: 5199000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aO9MQq7zZYX2curgVm4_e_bmMHBH7PGSAQTc7mv1fQ&s=10",
  },
  {
    id: 14,
    nama: "VIVO X300",
    deskripsi: "256/8GB | Snapdragon G99 | Baterai 5000 MAh | Fast Charge 45W |",
    harga: 5199000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aO9MQq7zZYX2curgVm4_e_bmMHBH7PGSAQTc7mv1fQ&s=10",
  },
  {
    id: 15,
    nama: "VIVO X300",
    deskripsi: "256/8GB | Snapdragon G99 | Baterai 5000 MAh | Fast Charge 45W |",
    harga: 5199000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aO9MQq7zZYX2curgVm4_e_bmMHBH7PGSAQTc7mv1fQ&s=10",
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