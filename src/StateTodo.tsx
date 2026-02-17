import { useState } from "react";

export default function StateTodo() {
  // ToDo項目idの最大値(登録つどにインクリメント)
  const [maxId, setMaxId] = useState(1);
  // 入力値(title)、ToDoリスト(todo)
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);

  // テキストボックスへの入力をStateに反映
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    // 新規のToDoを追加
    setTodo([
      ...todo,
      {
        id: maxId, // ID
        title, // ToDo本体
        created: new Date(), // 作成日時
        isDone: false, // 実行済みか
      },
    ]);
    setMaxId((id) => id + 1);
  };

  return (
    <div>
      <label>
        やること:
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChangeTitle}
        />
      </label>
      <button type="button" onClick={handleClick}>
        追加
      </button>
      <hr />
      {/* ToDoをリストに整形 */}
      <ul>
        {todo.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
