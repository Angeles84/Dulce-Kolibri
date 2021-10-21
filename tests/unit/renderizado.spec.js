import { shallowMount , mount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'


describe( 'Footer' , () => {

  it( 'Que el html sea igual a la ruta' , () => {
    const $route = {
      name: 'Nosotros'
    }
    const wrapper = shallowMount( Footer, {
      global: {
        mocks:{
          $route
        }
      }
    })
    let ruta = wrapper.find('li.testing')
    expect(ruta.text()).toEqual($route.name)
  }) 
})