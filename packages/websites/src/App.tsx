import styled from "styled-components";
import ReactAntAutoComplete from "@jswork/react-ant-autocomplete3";
// @ts-ignore
import nx from "@jswork/next";
import "@jswork/next-key-map";
// import { useEffect } from "react";

const Container = styled.div`
  border: 1px solid #ccc;
  text-align: center;
  padding: 10px;
`;

const headers = {
  "Content-Type": "application/json",
  authorization:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1dHlwIjoiTERBUF9VU0VSIiwiYXVkIjpbImFvc3AtZ2F0ZXdheSIsIml5eS1hcGkiLCJhb3QiLCJ2d29wcyIsIm5vdGlmaWNhdGlvbi1jZW50ZXItYWRtaW4iLCJhb2MtYWRtaW4iXSwic3ViIjoiYXJpYy56aGVuZyIsImlzcyI6ImFsbzcuY29tIiwiZXhwIjoxNjMyNDg1OTI4LCJqdGkiOiIyZTZlZWM3OC1jMTkyLTQ1MTEtYmIxMi0xNTA0YTk2Y2QyOGQifQ.CJOZ_r2TEkl3bZEqsH8VDeXcum0UHnorl21Ir-o8UK9RyipB1eFZYf0obfkDglyWC-2rHnPMmpW5VgHhDGWOCwPwM503-u0KBVkk5yhsCWnvEyBEwNoOn_k-auOd7NsWHoiT4z5-GnABMAlWe5e3BlO_3InzoBueMvatEY6tidM",
  baseinfo: "0,6847",
};

function App() {
  const query = (keyword?: string) => {
    return fetch(
      `https://aosp-gateway.beta.saybot.net/ace-kellis/api/v1/course_series_english?pageNo=1&pageSize=10&name=${keyword}`,
      { headers }
    )
      .then((r) => r.json())
      .then((res) => {
        const items = nx.keyMap(res.result, {
          uuid: "value",
          cnName: "label",
        });
        console.log("items:", items);
        return { items, total: res.totalCount };
      });
  };

  return (
    <Container className="App">
      <ReactAntAutoComplete
        placeholder="请输入关键字进行搜索"
        style={{ width: 200 }}
        query={query}
        onSearch={(e) => {
          console.log("search e:", e.target.value);
        }}
      />
    </Container>
  );
}

export default App;
