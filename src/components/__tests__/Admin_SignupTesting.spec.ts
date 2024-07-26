import { describe, it, expect,vi } from 'vitest'

import { mount } from '@vue/test-utils'
import AdminSignup from '../Signup/AdminSignup.vue'
import EmployeeSignup from '../Signup/EmployeeSignup.vue'

vi.mock('@vueform/vueform', () => ({
  useVueform: vi.fn(() => ({
    vueVersion: '3', 
<<<<<<< HEAD
=======
    data: {
      _value: {
        username: '',
        fullname: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
    },
>>>>>>> 7b75c5540ed1bdc7b98c3f68c38ee01d4c814736
  })),
  Vueform: {
    methods: {
      validate: vi.fn(),
    },
  },
}))

describe('AdminSignup', () => {
  it('renders properly', () => {
    const wrapper = mount(AdminSignup)
<<<<<<< HEAD
    expect(wrapper.exists()).toBe(true)
  })
  
})
describe('EmployeeSignup', () => {
  it('renders properly', () => {
    const wrapper = mount(EmployeeSignup)
=======
    console.log(wrapper.vm.data._value.fullname)
    expect(wrapper.exists()).toBe(true)
  })
  it('has the correct form fields and validation rules', async () => {
    const wrapper = mount(AdminSignup)
    const schema = wrapper.vm.vueform.schema

    expect(schema.username.rules).toContain('required')
    expect(schema.username.rules).toContain('min:8')

    expect(schema.fullname.rules).toContain('required')
    expect(schema.fullname.rules).toContain('min:8')

    expect(schema.email.rules).toContain('required')
    expect(schema.email.rules).toContain('email')

    expect(schema.password.rules).toContain('required')
    expect(schema.password.rules).toContain('min:8')

    expect(schema.password_confirmation.rules).toContain('required')
    expect(schema.password_confirmation.rules).toContain('min:8')
    expect(schema.password_confirmation.rules).toContain('same:password')
  })

  it('submits the form correctly', async () => {
    const wrapper = mount(AdminSignup)

    // Simulate filling out the form
    wrapper.vm.data.username = 'saragadam.neeraja@bridgelabz.com'
    wrapper.vm.data._value.fullname = 'Test User'
    // wrapper.vm.vueform.value.data.email = 'test@example.com'
    // wrapper.vm.vueform.value.data.password = 'password123'
    // wrapper.vm.vueform.value.data.password_confirmation = 'password123'

    // Trigger form submission
    await wrapper.vm.vueform.onSubmit()

    // Check if form data is logged correctly
    // expect(console.log).toHaveBeenCalledWith('submit')
    // expect(console.log).toHaveBeenCalledWith(wrapper.vm.vueform.value.data)
  })
})
describe('EmployeeSignup', () => {
  it('renders properly', () => {
    const wrapper = mount(EmployeeSignup, { props: { msg: 'Hello just testing the component is rendering or not' } })
>>>>>>> 7b75c5540ed1bdc7b98c3f68c38ee01d4c814736
    expect(wrapper.exists()).toBe(true)
  })
})

<<<<<<< HEAD
=======

>>>>>>> 7b75c5540ed1bdc7b98c3f68c38ee01d4c814736
