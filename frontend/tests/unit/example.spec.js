import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {//describe : tests block 'HelloWorld.vue'=> what we are testing
  it('renders props.msg when passed', () => {//it : test block, 'renders...'=> what we are testing
    const msg = 'new message11'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
    expect(wrapper.element).toMatchSnapshot();
  })
})
