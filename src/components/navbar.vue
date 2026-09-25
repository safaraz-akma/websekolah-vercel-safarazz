src/components/Navbar.vue
<template>
 <nav>
 <h2></h2>
 <div class="menu"> 
 <RouterLink to="/">Landing</RouterLink> |
 <RouterLink to="/product">Product</RouterLink> |
 <RouterLink to="/about">About</RouterLink> |
 <RouterLink to="/contact">Contact</RouterLink> |
 <RouterLink to="/ulasan">Ulasan</RouterLink> 
</div>

</nav>
</template>
 <style>
 nav {
  position: relative;
  display: flex;
  align-items: center;
  padding: 15px 30px;
}

.menu {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
  margin-top: 10px;
}
</style>