import { Button, Col, Divider, Image, List, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import Square from "./Square";

function Fetching(props) {
  const handleNext = () => {
    props.setStep(6);
  };
  const [pokemonList, setPokemonList] = useState([]);

  const pokemonURL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    fetch(pokemonURL)
      .then((res) => res.json())
      .then((resJson) => {
        // TODO: Find the Bugs
        const pokemonList = resJson;
        console.log(resJson)
        // TODO: Find the Bugs
        // test push
        // setPokemonList will broken the page
        setPokemonList(pokemonList.result);
        console.log(pokemonList);
      });
  }, []);

  return (
    <div>
      <div>
        <p>Sekarang kita coba fetch API nama pokemon</p>
        <Image src="/fetching.png" width="20%" />
      </div>
      <Divider />
      <Row>
        <List
          grid={{
            column: 4,
          }}
          dataSource={pokemonList}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text style={{ color: "white" }}>
                {item.name}
              </Typography.Text>
            </List.Item>
          )}
        />
      </Row>
      <Divider />
      <Button onClick={handleNext} type="primary">
        Next?
      </Button>
    </div>
  );
}
export default Fetching;
