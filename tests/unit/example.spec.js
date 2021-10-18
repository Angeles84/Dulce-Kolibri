import { shallowMount } from '@vue/test-utils'
import Nosotros from '@/views/Nosotros.vue'


describe( 'Nosotros.vue' , () => {
  const wrapper = shallowMount(Nosotros)

  it( 'Que diga: "Nuestra historia" en el título' , () => {
    let titulo = wrapper.find( 'h2' )
    //expect(titulo.text()).toEqual( 'Nuestra historia' )  //que sea idéntico
    // con toMatch podría decir solo "Nuestra" y va a pasar porque si contiene Nuestra
    expect(titulo.text()).toBe( 'Nuestra historia' )
  })
})


