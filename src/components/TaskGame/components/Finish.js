import { Button, Divider, Image } from "antd";

function Finish(props) {
  return (
    <div>
      <Divider />
      <Image src="/congrats.png" />
      <Divider />
      <Button href="/" type="primary">
        Return Home
      </Button>
    </div>
  );
}

export default Finish;
