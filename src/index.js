import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得して初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liを生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button(完了)ダグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  // button(削除)ダグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 削除ボタンを押したら親要素（div）から消す
    const deleteTaret = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTaret);
  });

  // divタグの子要素にliを入子にする
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完成リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
