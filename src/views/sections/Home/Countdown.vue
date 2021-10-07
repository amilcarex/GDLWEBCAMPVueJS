<template>
  <section class="seccion">
    <h2>Faltan</h2>
    <!-- <div class="cuenta-regresiva contenedor">
    <ul class="clearfix">
      <li>
        <p id="dias" class="numero"></p>Días
      </li>
      <li>
        <p id="horas" class="numero"></p>Horas
      </li>
      <li>
        <p id="minutos" class="numero"></p>Minutos
      </li>
      <li>
        <p id="segundos" class="numero"></p>Segundos
      </li>
    </ul>
  </div> -->
    <vue-countdown-timer
      :start-time="new Date().getFullYear() + '-12-12 00:00:00'"
      :end-time="new Date().getFullYear() + '-12-12 00:00:00'"
      :interval="1000"
      label-position="begin"
      :end-text="'Event ended!'"
      :day-txt="'days'"
      :hour-txt="'hours'"
      :minutes-txt="'minutes'"
      :seconds-txt="'seconds'"
    >
      <template slot="countdown" slot-scope="scope">
        <div class="cuenta-regresiva contenedor">
          <ul class="clearfix">
            <li>
              <p id="dias" class="numero">{{ scope.props.days }}</p>
              Días
            </li>
            <li>
              <p id="horas" class="numero">{{ scope.props.hours }}</p>
              Horas
            </li>
            <li>
              <p id="minutos" class="numero">{{ scope.props.minutes }}</p>
              Minutos
            </li>
            <li>
              <p id="segundos" class="numero">{{ scope.props.seconds }}</p>
              Segundos
            </li>
          </ul>
        </div>
      </template>
      <template slot="end-text" slot-scope="scope">
        <span style="color: green">{{ scope.props.endText }}</span>
      </template>
    </vue-countdown-timer>
  </section>
</template>

<script>
export default {
  name: "Countdown",
};
</script>

<style>
</style>