import { Button, Col, Divider, Image, Row } from "antd";

function Destructuring(props) {
  const handleNext = () => {
    props.setStep(1);
  };

  var colors = {
    color1: "red",
    color2: "yellow",
    color3: "green",
  };

  // TODO: Find the Bugs
  var { color1, color2, color3 } = colors;

  return (
    <div>
      <div>
        <Row justify="space-around">
          <Col span={4}>
            <div
              style={{
                height: "50px",
                width: "50px",
                backgroundColor: color1,
              }}
            />
          </Col>
          <Col span={4}>
            <div
              style={{
                height: "50px",
                width: "50px",
                backgroundColor: color2,
              }}
            />
          </Col>
          <Col span={4}>
            <div
              style={{
                height: "50px",
                width: "50px",
                backgroundColor: color3,
              }}
            />
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

export default Destructuring;
