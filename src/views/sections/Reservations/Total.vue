<template>
         <div class="resumen" id="resumen">
            <h3>Pago y Extra</h3>
            <div class="caja flex resumen-pago clearfix">
                <div class="extras">
                    <div class="orden">
                        <label for="camisa-evento">Camisa del evento $10 <small> (Promoción 7% de descuento)</small></label>
                        <input type="number" name="pedido_camisas" @input="selectCamisas" id="camisa-evento" min="0" size="3" placeholder="0">
                    </div>
                    <div class="orden">
                        <label for="etiquetas">Paquete de 10 Etiquetas $2 <small> (HTML5, CSS3, JavaScript, Chrome)</small></label>
                        <input type="number" @input="selectEtiquetas"  name="pedido_etiquetas" id="etiquetas" min="0" size="3" placeholder="0">
                    </div>
                    <div class="orden">
                        <label for="regalo">Seleccione un Regalo *</label>
                        <select name="regalo" id="regalo" @input="selectRegalo">
                            <option value="" selected disabled>Seleccione un Regalo</option>
                            <option value="2">Etiquetas</option>
                            <option value="1">Pulsera</option>
                            <option value="3">Plumas</option>
                        </select>
                    </div>
                    <input type="button" value="Calcular" @click.prevent="calculate" class="button" id="calcular" name="calcular">
                </div><!-- EXTRAS -->
                <div class="total">
                    <p>Resumen:</p>
                    <div id="lista-productos" class="lista-productos">

                    </div>
                    <p>Total:</p>
                    <div id="suma-total" class="suma-total"></div>
                    <input type="hidden" name="total_pedido" id="total_pedido">
                    <input type="submit" name="submit" value="Pagar"  id="btnRegistro" class="button">
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: "Total",
    methods:{
        selectCamisas(){
            this.$emit("selectCamisas", event.data);
        },
        selectEtiquetas(){
            this.$emit("selectEtiquetas", event.data);
        },
        selectRegalo(){
            this.$emit("selectRegalo", event.target.value);
        },
        calculate(){
            this.$emit("calculate");
        }
    }
}
</script>

<style>

</style>