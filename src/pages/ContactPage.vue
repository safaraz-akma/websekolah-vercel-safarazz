
<template>
  <div class="contact-page">
    <section class="hero">
      <h1>Hubungi Kami</h1>
    </section>

    <section class="contact-container">
      <!-- Info Kontak -->
      <div class="contact-info">
        <h2>Info Kontak</h2>

        <p>
          <strong>📍 Alamat</strong><br>
          Jl. sukarame No. 11, Bandung Raya
        </p>

        <p>
          <strong>📞 Telepon</strong><br>
          (022) 456 781
        </p>

        <p>
          <strong>✉️ Email</strong><br>
          onlineshop@Razz.sch.id
        </p>
      </div>

      <!-- Form -->
      <div class="contact-form">
        <h2>Kirim Pesan</h2>

        <form>
          <label>Nama</label>
          <input type="text" placeholder="Nama kamu">

          <label>Email</label>
          <input type="email" placeholder="Email kamu">

          <label>Pesan</label>
          <textarea placeholder="Tulis pesan..."></textarea>

          <button type="button">Kirim</button>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-page {
  padding: 30px 8%;
}

/* Bagian judul */
.hero {
  background: linear-gradient(135deg, #243b7a, #4055d6);
  color: white;
  text-align: center;
  padding: 30px;
  border-radius: 4px;
  margin-bottom: 30px;
}

.hero h1 {
  margin: 0;
}

/* Dua kolom */
.contact-container {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

/* Info kontak */
.contact-info {
  flex: 1;
}

.contact-info h2,
.contact-form h2 {
  margin-bottom: 20px;
}

.contact-info p {
  margin-bottom: 20px;
  line-height: 1.6;
}

/* Form */
.contact-form {
  flex: 1;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(239, 15, 15, 0.08);
}

form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #0505ec;
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

textarea {
  height: 100px;
  resize: none;
}

button {
  width: fit-content;
  padding: 10px 22px;
  background: #011ab6;
  color: white;
  border: none;
  border-radius: 999px;
  cursor: pointer;
}

button:hover {
  background: #243b7a;
}

/* Tampilan HP */
@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
  }

  .contact-info,
  .contact-form {
    width: 100%;
  }
}
</style>