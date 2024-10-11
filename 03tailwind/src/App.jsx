import Card from "./component/Card";
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-green-400 ">
        Hello world!
      </h1>
      <Card username="kuldeep"></Card>
      <Card username="jyoti"></Card>
      <Card username="sanjana"></Card>
    </>
  );
}

export default App;
