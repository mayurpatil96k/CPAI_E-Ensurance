import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AgentSignup from '../Signup/AgentSignup.vue'
import CustomerSignup from '../Signup/CustomerSignup.vue'

describe('AgentSignup', () => {
  it('renders properly', () => {
    const wrapper = mount(AgentSignup)
    expect(wrapper.exists()).toBe(true)
  })
})


describe('CustomerSignup', () => {
  it('renders properly', () => {
    const wrapper = mount(CustomerSignup)
    expect(wrapper.exists()).toBe(true)
  })
})




