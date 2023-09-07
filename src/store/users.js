const usersModule = {
  namespaced: true,
  state: () => ({
    users: [
      { name: 'Вася', surname: 'Пупкин', id: 1, age: 25 },
      { name: 'Петя', surname: 'Иванов', id: 2, age: 30 },
      { name: 'Маша', surname: 'Петрова', id: 3, age: 28 },
    ],
  }),
  getters: {
    sortedByAge(state) {
      return [...state.users].sort((a, b) => a.age < b.age);
    },
  },
};

export default usersModule;
