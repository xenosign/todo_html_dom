const taskInput = document.querySelector('#task');
const taskBtn = document.querySelector('#task-btn');
const todoList = document.querySelector('#todo-list');

taskBtn.addEventListener('click', () => {
  const todo = document.createElement('li');

  taskInput.setAttribute('placeholder', '');

  // early return 패턴을 사용해서 할 일 입력이 안된 상태로 버튼이 클릭되면 함수 자체를 종료
  if (taskInput.value === '') {
    return taskInput.setAttribute('placeholder', '할 일을 입력하세요!');
  }

  // 할 일이 입력이 되었으면 실행되는 코드
  const checkBtn = document.createElement('input');
  checkBtn.setAttribute('type', 'checkbox');

  // 체크 박스가 클릭이 되면, preantNode 를 사용하여 해당 부모 요소인 li 로 접근하여 컨텐츠에 line-through 효과 주기
  checkBtn.addEventListener('click', function () {
    if (checkBtn.checked === true) {
      checkBtn.parentNode.style.textDecoration = 'line-through';
    } else {
      checkBtn.parentNode.style.textDecoration = 'none';
    }
  });

  // 삭제 버튼 생성
  const deleteBtn = document.createElement('input');

  deleteBtn.setAttribute('type', 'button');
  deleteBtn.setAttribute('value', '삭제');
  // 아래에 this 를 이용하여 자기 자신의 부모 모드를 삭제하는 delete(this); onclick 속성으로 버튼에 부여
  deleteBtn.setAttribute('onclick', 'deleteTask(this);');

  // 할일 목록에 필요한 요소들은 전부 붙이기
  todo.append(checkBtn);
  todo.append(taskInput.value);
  todo.append(deleteBtn);

  // 리스트에 새로운 할일 붙이기
  todoList.appendChild(todo);

  taskInput.value = '';
});

function deleteTask(t) {
  t.parentNode.remove();
}
