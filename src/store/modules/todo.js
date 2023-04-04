const initState = {
  todoList: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '척추 펴기',
      done: false,
    },
    {
      id: 2,
      text: '프로젝트 잘 마무리하기',
      done: false,
    },
  ],
};

export default function todo(state = initState, action) {
  return state;
}
