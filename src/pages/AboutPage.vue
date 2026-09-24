<template>
  <div class="about">

    <section class="banner">
      <h1>Tentang Kami</h1>
    </section>

    <section class="cerita">
      <div class="text">
        <h2>Cerita Kami</h2>

        <p>
          Onlineshop ini dikelola langsung oleh CEO RAZZ GANTENG
          sebagai store yang menyediakan produk dengan mudah dan harga terjangkau.
        </p>

        <p>
          Setiap produk dipilih dan dikurasi oleh tim kami
          agar sesuai dengan kebutuhan anda.
        </p>
      </div>

      <div class="foto">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcylLDVfY17c1TAV_lQvLTZtIEMTmmuIVY3-A1gSjTqg&s=10" alt=""> 
      </div>
    </section>

    <section class="tim">
      <h2>Tim Kami</h2>

      <div class="team-list">
        <TeamCard
          v-for="anggota in anggotaTim"
          :key="anggota.nama"
          :nama="anggota.nama"
          :jabatan="anggota.jabatan"
        />
      </div>
    </section>

  </div>
</template>

<script setup>
import TeamCard from '../components/TeamCard.vue'

const anggotaTim = [
  {
    nama: 'Safarazz',
    jabatan: 'Ketua Tim'
  },
  {
    nama: 'Akma',
    jabatan: 'Desain UI/UX'
  },
  {
    nama: 'Fadhil',
    jabatan: 'Programmer'
  },
]
</script>

<style scoped>
.about {
  width: 80%;
  margin: auto;
}

/* Banner */
.banner {
  background: linear-gradient(90deg, #243b80, #3f4fd3);
  color: white;
  text-align: center;
  padding: 30px;
  margin-bottom: 30px;

}

.banner h1 {
  margin: 0;
}

/* Cerita Kami */
.cerita {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 40px;
}

.text {
  flex: 1;
}

.text h2,
.tim h2 {
  color: #243b80;
  font-size: 25px;
  margin-bottom: 20px;
}

.text p {
  font-size: 20px;
  line-height: 1.6;
}

.foto {
  width: 400px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  margin: 30px auto;
  
  display: flex;
  justify-content: center;
  color: #777;
}

/* Tim */
.tim {
  background: #f5faff;
  padding: 30px;
  text-align: center;
}

.team-list {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
