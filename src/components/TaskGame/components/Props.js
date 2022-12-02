import { Button, Col, Divider, Image, Row } from "antd";
import Square from "./Square";

function Props(props) {
  const handleNext = () => {
    props.setStep(2);
  };

  var colors = {
    color1: "red",
    color2: "yellow",
    color3: "green",
  };

  var { color1, color2, color3 } = colors;

  return (
    <div>
      <div>
        <Row justify="space-around">
          <Col span={4}>
            {/* TODO: Find the Bugs */}
            <Square backgroundColor={color1} />
          </Col>
          <Col span={4}>
            {/* TODO: Find the Bugs */}
            <Square backgroundColor={color2}/>
          </Col>
          <Col span={4}>
            {/* TODO: Find the Bugs */}
            <Square backgroundColor={color3}/>
          </Col>
        </Row>
      </div>
      <p>Pengennya warna warni seperti kotak dibawah ini</p>
      <Image src="/destructuring.png" width="50%" />
      <Divider />
      <Button onClick={handleNext} type="primary">
        Next?
      </Button>
    </div>
  );
}
export default Props;
