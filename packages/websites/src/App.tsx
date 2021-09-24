import styled from "styled-components";
import ReactAntAutoComplete from "@jswork/react-ant-autocomplete3";

const Container = styled.div`
  border: 1px solid #ccc;
  text-align: center;
  padding: 10px;
`;

function App() {
  return (
    <Container className="App">
      <ReactAntAutoComplete
        placeholder="请输入关键字进行搜索"
        style={{ width: 200 }}
        onChange={(e) => {
          console.log("e:", e.target.value);
        }}
        onSearch={(e) => {
          console.log("search e:", e.target.value);
        }}
      />
    </Container>
  );
}

export default App;
