import { mount } from '@vue/test-utils';
import TestComponent from './TestComponent.vue';

// vue3-jest, jest, babel-jest - все 27ой версии
// также нужно установить окружение "testEnvironment": "jsdom" в конфиге jest

describe('TestComponent Testing', () => {
  test('text content', () => {
    const wrapper = mount(TestComponent, {
      propsData: {
        message: 'Test Message'
      }
    });
    expect(wrapper.text()).toEqual('Test Message is Test Message');
  });
  
});

