import { Button } from "antd";

function Home() {
  return (
    <div>
      <h1>React JS</h1>
      <h2>Workshop Tech Curry BGP 2022</h2>
      <p>
        Pada workshop kali ini, kita akan bermain dan menyelesaikan beberapa{" "}
        <i>bugs</i> pada kodingan saya yang tidak sempurna
      </p>
      <Button type="primary" href="/task">
        Start!
      </Button>
    </div>
  );
}

export default Home;
