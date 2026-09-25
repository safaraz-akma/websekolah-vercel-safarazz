<script setup>
function mainkanSuara() {
  const suara = new Audio('/audio.mp3')
  suara.play()
}
</script>
<template>
   <main>
      <div class="main hero  bg-linear-to-t from-sky-500 to-indigo-500 text-center p-[100px]  
    items-start justify center text-white pt-2 pb-2 gap-9 rounded-xl ml-30 mr-30">
         <h1 class="text-[40pt] text-center mt-10 ">Welcome To Onlineshop Razz</h1>
         <p class="text-[28pt] landing-[80pt]">Belanja gampang, hati pun senang, semuanya ada disini.
         </p>
         <RouterLink to="/product" class="btn" @click="mainkanSuara">Lihat Produk</RouterLink>
      </div>
      <div class="video">
         <center><video controls width="500" loop>
               <source src="https://www.w3schools.com/html/mov_bbb.mp4" />
            </video></center>
      </div>


      <div class="container flex justify-center">
         <div class="kualitas">
            <h3>🏆</h3>
            <p>kualitas terbaik</p>
            <p>produk pilihan dengan kualitas terjamin</p>
         </div>

         <div class="kualitas">
            <h3>🤝</h3>
            <p>harga terjangkau</p>
            <p>harga bersahabat tanpa mengurangi kualitas</p>
         </div>

         <div class="kualitas">
            <h3>🛒</h3>
            <p>pelayanan cepat</p>
            <p>cepat dan hemat waktu</p>
         </div>
      </div>
   </main>
</template>
<style scoped>
.video {
   border-radius: 20px;
   margin-top: 50px;
   margin-bottom: 50px;
}
</style>
