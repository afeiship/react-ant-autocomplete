import ReactAntAutoComplete from "@jswork/react-ant-autocomplete3";
import styled from 'styled-components';

const Container = styled.div`
  border:1px solid #ccc;
  text-align: center;
  padding: 10px;
`;

function App() {
  return (
    <Container className="App">
      <ReactAntAutoComplete placeholder="请输入关键字进行搜索" style={{ width: 200 }} />
    </Container>
  );
}

export default App;
