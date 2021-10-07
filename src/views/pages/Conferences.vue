<template>
  <div class="conferencia">
      <Summary />

    <section class="seccion contenedor">
        <h2>Galería de Fotos</h2>

        <div class="galeria grid">
            <a href="img/galeria/01.jpg" data-lightbox="galeria">
                <img src="img/galeria/thumbs/01.jpg" alt="galeria 1">
            </a>
            <a href="img/galeria/02.jpg" data-lightbox="galeria">
                <img src="img/galeria/thumbs/02.jpg" alt="galeria 1">
            </a>
            <a href="img/galeria/03.jpg" data-lightbox="galeria">
                <img src="img/galeria/thumbs/03.jpg" alt="galeria 1">
            </a>
            <a href="img/galeria/04.jpg" data-lightbox="galeria">
                <img src="img/galeria/thumbs/04.jpg" alt="galeria 1">
            </a>
            <a href="img/galeria/05.jpg" data-lightbox="galeria">
                <img src="img/galeria/thumbs/05.jpg" alt="galeria 1">
            </a>
            <a href="img/galeria/06.jpg" data-lightbox="galeria">
                <img src="img/galeria/thumbs/06.jpg" alt="galeria 1">
            </a>
            <a href="img/galeria/07.jpg" data-lightbox="galeria">
                <img src="img/galeria/thumbs/07.jpg" alt="galeria 1">
            </a>
            <a href="img/galeria/08.jpg" data-lightbox="galeria">
                <img src="img/galeria/thumbs/08.jpg" alt="galeria 1">
            </a>
            <a href="img/galeria/09.jpg" data-lightbox="galeria">
                <img src="img/galeria/thumbs/09.jpg" alt="galeria 1">
            </a>
            <a href="img/galeria/10.jpg" data-lightbox="galeria">
                <img src="img/galeria/thumbs/10.jpg" alt="galeria 1">
            </a>

        </div>
    </section>
</div>
</template>

<script>
import Summary from '../sections/Summary.vue';
export default {
    name: "Conferences",
    components:{
        'Summary' : Summary,
    }

}
</script>

<style>

</style>