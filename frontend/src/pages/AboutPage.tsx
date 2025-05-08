import { hello } from "../api/util";

function About() {
  const clickedBtn = async () => {
    console.log("clicked");

    const { success, message } = await hello();

    if (success) {
      alert(message);
    } else {
      alert("ERROR: " + message);
    }
  };

  return (
    <main className="flex justify-center items-center flex-grow flex-col p-4">
      <h1>This is some random page</h1>
      <button onClick={clickedBtn}>Click me</button>
    </main>
  );
}

export default About;
