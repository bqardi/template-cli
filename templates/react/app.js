const { Fragment } = React;

function App() {
  return (
    <Fragment>
      <h1 className="text-3xl font-bold text-red-500">Hello world!</h1>
    </Fragment>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
