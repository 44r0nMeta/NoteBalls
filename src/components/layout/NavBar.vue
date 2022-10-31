<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">

    <div class="container is-max-desktop px-2">

      <div class="navbar-brand">
        <RouterLink to="/" class="navbar-item is-size-4 is-family-monospace">
          NoteBalls
        </RouterLink>

        <a role="button" @click="switchNavBar" :class="{ 'is-active': showMobileNavBar }" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" ref="navbarBurger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div ref="navbarMenuRef" id="navbarBasicExample" :class="{ 'is-active': showMobileNavBar }" class="navbar-menu"> 
        <div class="navbar-end">
            <RouterLink @click="switchNavBar" to="/" class="navbar-item" active-class="is-active">
              Notes
            </RouterLink>

            <RouterLink @click="switchNavBar" to="/stats" class="navbar-item" active-class=" is-active">
              Stats
            </RouterLink>
        </div>
      </div>
    </div>
  </nav>

</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onClickOutside } from '@vueuse/core'
  
/*
  Refs
*/
  const navbarMenuRef = ref(null)
  const navbarBurger = ref(null)
/*
  Mobile show
*/
  const showMobileNavBar = ref(false)

  const switchNavBar = () => {
    showMobileNavBar.value = showMobileNavBar.value ? false : true
  }

/* 
  Close NavBar
*/
  onClickOutside(navbarMenuRef, (event) => {
    showMobileNavBar.value = false
  }, {
    ignore: [navbarBurger] //Ignorer le composant sur le outSideClick
  })
</script>

<style>
  @media(max-width: 1023px){
    .navbar-menu {
      position: absolute;
      left: 0;
      width: 100%;
    }
  }
</style>