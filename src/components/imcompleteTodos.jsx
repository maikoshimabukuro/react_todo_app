export const ImcompleteTodos = (props) => {
  const { imcompleteTodos, onclickComplete, onClickDelete } = props;
  return (
    <div className="imcomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {imcompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onclickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
