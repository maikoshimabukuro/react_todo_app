const style = {
  backgroundColor: "#c6ffe2",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const ImcompleteTodos = (props) => {
  const { imcompleteTodos, onclickComplete, onClickDelete } = props;
  return (
    <div style={style} className="imcomplete-area">
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
