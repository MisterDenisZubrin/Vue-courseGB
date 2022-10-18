import { mount } from '@vue/test-utils';
import Form from '../components/Form.vue';
import List from '../components/List.vue';
import { createStore } from 'vuex';
import store from '../store/index.js';

// vue3-jest, jest, babel-jest - все 27ой версии
// также нужно установить окружение "testEnvironment": "jsdom" в конфиге jest

const mockRoute = {
  params: {
    category: 'Test',
  },
  query: {
    value: 123
  }
};
const mockRouter = {
  push: jest.fn()
}
// const wrapper = mount(Form, {
//   global: {
//     mocks: {
//       $route: mockRoute,
//       $router: mockRouter
//     }
//   }
// });

describe('Form tests', () => {
  // const store = createStore({
  //   state: {
  //     notes: []
  //   },
  //   mutations: {
  //     setNotesList({
  //       notes
  //     }, payload) {
  //       notes = payload;
  //     }
  //   },
  //   getters: {
  //     getNotesList({ notes }) {
  //       return notes;
  //     }
  //   }
  // });
  const wrapper = mount(Form, {
    global: {
      plugins: [store],
      mocks: {
        $route: mockRoute,
        $router: mockRouter
      }
    }
  });

  test('Form Test', () => {
    // const category = wrapper.find('select[id="category"]');
    // const value = wrapper.find('input[id="value"]');
    // const date = wrapper.find('input[id="date"]');
    // Получаю undefined везде, хотя элемент находит
    const note = {
      category: 'Test',
      value: 123,
      date: '2.9.2022',
      id: 5
    }
    const button = wrapper.find('input[type="submit"]');
    button.trigger('click');
    // toContainEqual - поиск объекта в массиве
    expect(store.state.notes).toContainEqual(note);
  });
});