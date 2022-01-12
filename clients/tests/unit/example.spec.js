import { createLocalVue, mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Vuetify from 'vuetify';

describe('HelloWorld.vue', () => {
  let localVue
  let vuetify
  let wrapper
  beforeEach(() => {
    localVue = createLocalVue(); // because of vuetify, we should use a localVue instance
    vuetify = new Vuetify();
    wrapper = mount(HelloWorld, {
      localVue,
      vuetify
    });
  });
  test("True Test", () => {
    const h1 = wrapper.get('h1')
    expect(h1.text()).toBe('Welcome to Vuetify Practice')
  });
  test("Button Test", async () => {
    const button = wrapper.find('[data-testid="button"]')
    expect(button.exists()).toBe(true)
    button.vm.$emit('click')
    await wrapper.vm.$nextTick()
    const h1 = wrapper.get('h1')
    expect(h1.text()).toBe('Hello')
  });
})