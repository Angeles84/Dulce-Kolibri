<template>
    <div>
        <h2>hola</h2>


    </div>


</template>
<script>
import {mapState} from 'vuex'
export default {
    data: () => ({
        items: {
         1: { 
          id: 1,
          color: '#1F7087',
          src: 'https://media.istockphoto.com/photos/creamy-mascarpone-cheese-cake-with-strawberry-and-winter-berries-picture-id615247930?k=20&m=615247930&s=612x612&w=0&h=1Iz5305LghpTEDnTDgDg5l7pRwhOCTknMmwRrNJAwbw=',
          title: 'Cheesecake',
          artist: 'Cheescake de frambuesa con sabor cremoso y el toque de berries.',
          precio: 9990
        },
        2: {
          id: 2,
          color: '#1F7087',
          src: 'https://media.istockphoto.com/photos/chocolate-cake-with-bonbon-picture-id970877400?k=20&m=970877400&s=612x612&w=0&h=VyqDh9l-CohWJYZwf4TUoeMpHu6IyElNn9ZhFGL13kM=',
          title: 'Trufa',
          artist: 'Torta de trufa con chocolate y manjar. ¡Descubre lo mejor de la trufa!',
          precio: 21990
        },
        3: {
          id: 3,
          color: '#1F7087',
          src: 'https://media.istockphoto.com/photos/white-wooden-table-with-a-bundt-cake-kugelhupf-or-sockerkaka-and-a-picture-id1204993548?k=20&m=1204993548&s=612x612&w=0&h=EuuqGtbJLqqi-TDevLNk1eJ7R3C1ZspbPc-9WkybVwA=',
          title: 'Queque',
          artist: 'Esponjoso y delicioso queque de plátano, ideal para la hora del té.',
          precio: 5990
        },
        },
    }),
    methods:{

    },
    computed: {

        ...mapState(['producto'])
    }
    // data: () => ({
    //     info: null
    // }),
    // mounted() {
    //     axios.get('https://sandbox.flow.cl/api')
    //     .then(response => (this.info = response))
    // }
}
</script>