import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得して初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteListe(inputText);
};
// 未完成リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完成リストに追加する関数
const createIncompleteListe = (text) => {
  // divを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liを生成
  const li = document.createElement("li");
  li.innerText = text;

  // button(完了)ダグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了ボタンを押したら親要素（div）から消す
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグ生成
    const bacButton = document.createElement("button");
    bacButton.innerText = "戻す";
    bacButton.addEventListener("click", () => {
      // 押されたら戻すボタンの親タグ（div）を完了リストから削除
      const deleteTarget = bacButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = bacButton.parentNode.firstElementChild.innerText;
      createIncompleteListe(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(bacButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)ダグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 削除ボタンを押したら親要素（div）から消す
    deleteFromIncompleteList(deleteButton.parentNode);
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
