import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Signup from '@/views/Signup.vue'

const mockRoute = {
    name: 'home'
  }
  
  const mockRouter = {
    push: vi.fn()
  }
  
  vi.mock('vue-router', () => ({
    useRouter: () => mockRouter,
    useRoute: () => mockRoute
  }))
  
  
  describe('Signup.vue', () => {
    it('navigates correctly when navigateTo is called', async () => {
      const wrapper = mount(Signup)
      await wrapper.vm.navigateTo('AgentSignup')
      expect(wrapper.vm.activeButton).toBe('AgentSignup')
      expect(mockRouter.push).toHaveBeenCalledWith({ name: 'AgentSignup' })
    })
  
    it('updates activeButton on route name change', async () => {
      mockRoute.name = 'AgentSignup'
      const wrapper = mount(Signup)
      await wrapper.vm.$nextTick()
      expect(wrapper.vm.activeButton).toBe('AgentSignup')
    })
  })