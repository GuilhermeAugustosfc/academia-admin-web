import "./App.css";
import { useRef } from "react";
function App() {
  const inputTitleRef = useRef(null);
  const inputDescriptionRef = useRef(null);
  function sendNotification() {
    if (!inputTitleRef.current || !inputDescriptionRef.current) return;
    // eslint-disable-next-line no-debugger
    const title = inputTitleRef.current as React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >;
    const description = inputDescriptionRef.current as React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >;

    const data = {
      title: title.value as string,
      body: description.value as string,
    };

    fetch("http://localhost:3000/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((e) => {
        console.log(e);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <input
        ref={inputTitleRef}
        type="text"
        name="Title"
        placeholder="Digite o titulo da notificacao"
      />
      <input
        ref={inputDescriptionRef}
        type="text"
        name="body"
        placeholder="Digite o a descricao da notificacao"
      />
      <button onClick={sendNotification}>Send Notification</button>
    </>
  );
}

export default App;
