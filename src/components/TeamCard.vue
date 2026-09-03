<template>
  <div class="team-card">
    <div class="avatar">
      {{ nama.charAt(0) }}
    </div>

    <h3>{{ nama }}</h3>
    <p>{{ jabatan }}</p>
  </div>
</template>

<script setup>
defineProps({
  nama: String,
  jabatan: String
})
</script>

<style scoped>
.team-card {
  background: white;
  width: 150px;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.avatar {
  width: 45px;
  height: 45px;
  margin: auto;
  border-radius: 50%;
  background: #4c35e5;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.team-card h3 {
  font-size: 14px;
  margin: 10px 0 3px;
}

.team-card p {
  font-size: 11px;
  color: #777;
}
</style>