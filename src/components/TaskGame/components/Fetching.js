import { Button, Col, Divider, Image, Row } from "antd";
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

        // TODO: Find the Bugs
        // setPokemonList will broken the page
        // setPokemonList(pokemonList);
        console.log(pokemonList);
      });
  }, []);

  return (
    <div>
      <div>
        <p>Sekarang kita coba fetch API nama pokemon</p>
        <Image src="/fetching.png" width="50%" />
      </div>
      <Divider />
      <Row>
        {pokemonList.map((item) => {
          return (
            <Col span={6}>
              <Square text={item.name} />
            </Col>
          );
        })}
      </Row>
      <Divider />
      <Button onClick={handleNext} type="primary">
        Next?
      </Button>
    </div>
  );
}
export default Fetching;
