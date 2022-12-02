import { Button, Divider, Image } from "antd";

function Finish(props) {
  return (
    <div>
      <Divider />
      <Image src="/congrats.png" />
      <h6>Don't forget to create pull request ya!</h6>
      <Divider />
      <Button href="/" type="primary">
        Return Home
      </Button>
    </div>
  );
}

export default Finish;
