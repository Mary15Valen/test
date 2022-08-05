const app = Vue.createApp({
    data() {
        return {
           titulo: 'Test',
           cantidadb: 0,
           cantidadp: 0
           }
    },
    methods: {
        agregarp() {
            this.cantidadp = this.cantidadp + 1
        },
        agregarb() {
            this.cantidadb = this.cantidadb + 1
        },
        listo() {
            if (this.cantidadb > this.cantidadp) {
               /* this.desactivar = true*/
                alert('eres bulldog')
                return
            }
            if (this.cantidadp > this.cantidadb) {
               /* this.desactivar = true */
                alert('eres perro marino')
                return
            }
            if (this.cantidadp = this.cantidadb) {
               /* this.desactivar = true */
                alert('eres bulldog marino')
                return
            }
        }
    },

    computed: {
        colorCantidad() {
            return this.cantidad > 500 ? 'text-white' : 'text-pink'
        },
        mayusculasTexto() {
            return this.titulo.toUpperCase()
        }
    }
})