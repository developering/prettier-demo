
class ExampleComponent extends React.Component {
  render() {
    return <div>
      <button {...this.props}>Click me!</button>
    </div>;
  }
}


class ExampleComponent extends React.Component {
  render() {
    return (
      <div>
        <button {...this.props}>
          Click me!
        </button>
      </div>
    );
  }
}


class ExampleComponent extends React.Component {
  render() {
    return (
      <div>
        <button {...this.props}>Click me!</button>
      </div>
    );
  }
}

