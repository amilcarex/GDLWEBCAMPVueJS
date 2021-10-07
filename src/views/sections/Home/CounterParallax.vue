<template>
  <div class="contador parallax" >
    <div class="contenedor">
      <ul class="resumen-evento clearfix" >
        <li>
          <animate-number
            ref="animate1"
            from="0"
            to="6"
            class="numero"
            duration="2000"
            mode="manual"
            easing="easeOutQuad"
          ></animate-number>
          Invitados
        </li>
        <li>
          <animate-number
            ref="animate2"
            from="0"
            to="15"
            class="numero"
            duration="2000"
            mode="manual"
            easing="easeOutQuad"
          ></animate-number>
          Talleres
        </li>
        <li>
          <animate-number
            ref="animate3"
            from="0"
            to="3"
            class="numero"
            duration="2000"
            mode="manual"
            easing="easeOutQuad"
          ></animate-number>
          Dias
        </li>
        <li>
          <animate-number
            ref="animate4"
            from="0"
            to="9"
            class="numero"
            duration="2000"
            mode="manual"
            easing="easeOutQuad"
          ></animate-number>
          Conferencias
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter-Parallax",
  data() {
    return {
      visible: true,
    };
  },
  watch:{
    visible: function(){
      if(this.visible == true){
        this.$refs.animate1.start();
        this.$refs.animate2.start();
        this.$refs.animate3.start();
        this.$refs.animate4.start();
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.counterAnimation);
  },
  destroyed(){
    document.removeEventListener("scroll", this.counterAnimation);
  },
  methods: {
    counterAnimation() {
      var windowTop = $(document).scrollTop();
      var windowBottom = windowTop + window.innerHeight;
      var counter = $(".resumen-evento");
      var counterPositionTop = counter.offset().top;
      var counterPositionBottom = counterPositionTop + counter.height();
      if (
        counterPositionTop <= windowBottom &&
        counterPositionBottom >= windowTop
      ) 
      {
        this.visible = true;
      }else{
        this.visible = false;
      }
    },
  },
};
</script>

<style>
</style>