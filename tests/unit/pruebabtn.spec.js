import { shallowMount , mount } from '@vue/test-utils'
import Postres from '@/views/Postres.vue'


describe( 'Postres' , () => {
  const wrapper = shallowMount(Postres)

  test( 'Que se dispare la acción irAlDetalle' , () => {
    let imgProducto = wrapper.find( 'img.testing' )
    imgProducto.trigger('click')
    let irAlDetalleSpy = jest.spyOn(wrapper , 'irAlDetalle')
    expect(irAlDetalleSpy).toHaveBeenCalled()
  })
})