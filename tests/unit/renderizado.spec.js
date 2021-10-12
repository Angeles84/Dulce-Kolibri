import { shallowMount } from '@vue/test-utils'
import AppBar from '@/components/AppBar.vue'


describe( 'AppBar' , () => {

  it( 'Que vaya al detalle' , () => {
    const mockRouter = {
      push: jest.fn()
    }
    const wrapper = shallowMount( AppBar, {
      global: {
        mocks:{
          $router: mockRouter
        }
      }
    })
    wrapper.find('v-btn').trigger('click')
    expect(mockRouter.push).toHaveBeenCalled()
  })
})