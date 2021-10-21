
import {  shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Carrito from '@/views/Carrito'

const localVue = createLocalVue()

localVue.use(Vuex)


describe( 'Carrito' , () => {

  let actions
  let store

  beforeEach(() => {
    actions = {
      cobrar: jest.fn(),
    }
    store = new Vuex.Store({
      actions
    })
  })

  it( 'Que se dispare la acción cobrar al hacer click en el botón' , () => {

    const wrapper = shallowMount(Carrito, { store, localVue })

    let imgProducto = wrapper.find( '.testing' )

    imgProducto.trigger('click')

    expect(actions.cobrar).toHaveBeenCalled()
  })
})