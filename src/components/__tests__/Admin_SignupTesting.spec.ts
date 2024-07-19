import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AdminSignup from '../Signup/AdminSignup.vue'
import AgentSignup from '../Signup/AgentSignup.vue'

describe('AdminSingup', () => {
  it('renders properly', () => {
    const wrapper = mount(AdminSignup, { props: { msg: 'Hello just testing the component is rendering or not' } })
  })
})

// describe('agentSignup', () => {
//   it('renders properly', () => {
//     const wrapper = mount(AgentSignup, { props: { msg: 'Hello just testing the component is rendering or not' } })
//   })
// })
