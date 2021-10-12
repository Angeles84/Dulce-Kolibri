import { shallowMount , mount } from '@vue/test-utils'
import Postres from '@/views/Postres.vue'


describe( 'Postres' , () => {
  const wrapper = shallowMount(Postres)

  it( 'Que se dispare la acción irAlDetalle' , () => {
    let btnAgregar = wrapper.find( 'img.testing' )
    btnAgregar.trigger('click')
    let irAlDetalleSpy = jest.spyOn(wrapper , 'irAlDetalle')
    expect(irAlDetalleSpy).toHaveBeenCalled()
  })
})