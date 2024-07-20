import { describe, it, expect,vi } from 'vitest'

import { mount } from '@vue/test-utils'
import AdminSignup from '../Signup/AdminSignup.vue'
import EmployeeSignup from '../Signup/EmployeeSignup.vue'

vi.mock('@vueform/vueform', () => ({
  useVueform: vi.fn(() => ({
    vueVersion: '3', 
    data: {
      _value: {
        username: '',
        fullname: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
    },
  })),
  Vueform: {
    methods: {
      validate: vi.fn(),
    },
  },
}))

describe('AdminSignup', () => {
  it('renders properly', () => {
    const wrapper = mount(AdminSignup, { props: { msg: 'Hello just testing the component is rendering or not' } })
    expect(wrapper.exists()).toBe(true)
  })
})
describe('EmployeeSignup', () => {
  it('renders properly', () => {
    const wrapper = mount(EmployeeSignup)
    expect(wrapper.exists()).toBe(true)
  })
})


// describe('agentSignup', () => {
//   it('renders properly', () => {
//     const wrapper = mount(AgentSignup, { props: { msg: 'Hello just testing the component is rendering or not' } })
//   })
// })
