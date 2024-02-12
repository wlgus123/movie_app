import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello');
  }

  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };
  minus = () => {
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };

  componentDidMount() {
    // 컴포넌트가 처음 화면에 그려지면 실행
    console.log('component rendered');
  }

  componentDidUpdate() {
    // 컴포넌트가 업데이트 될 때마다 출력
    console.log('I just updated');
  }

  componentWillUnmount() {
    // 컴포넌트가 죽을 때마다 출력
    console.log('Goodbye, cruel world');
  }

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
