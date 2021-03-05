import React, {Component} from 'react';
import Caoliao from './Caoliao';
import Qrcode from './Qrcode';
import ReactQrcode from './ReactQrcode';

let originStr = `{"id":"2jKNBX+DVJ+cmVIf2jWXTOn2aEizXPyVgFfI17v3fZ7v7+ssu4O1+SlWjOlOzAMv2jKNBX+DVJ+cmVIf2jWXTOn2aEizXPyVgFfI17v3fZ7v7+ssu4O1+SlWjOlOzAMvSlWjOlOzAMvSlWjOlOzAMvSlWjOlOzAMv12345678901","codeIndex":1,"dataMd5":"8CA959166100C26279247F243FE8105A","data":"H4sIAAAAAAAAAO1Z204cRxD9l30et6qrqy/lNwwbIEKAbGKUWGi1wURyJCsSrJ8i/3vOqeHVVoRt\njOVBbE1vd3XXpWv7nJl58+/q/fZud3N7/Hb1fLV/eHr5i0jvq2l19+HPv2+ud+i9PD492Jy/PPt1\nvX/Bgd32dnfx7v0NhlQ0P5PyTPQit+ci+E8i8gfU3t/sbt9d30Hp1W8vNidnl5u9/Yvj1+vN+dnl\n+iUU/tpe7w62u+2rfz7cXnOx/ZPj9em9hd27u908e+/1IbreQnH1/M3qdHuKb4tc5CIXuchF/kjy\n6uP0SHh7dHx49DUAV61kTa1NmkcryWxS8ZbT8Cl7bZq0oSG1USd3rzUZrsNKqs5Gz6lUNFrtKbOh\npafS0bDe02BP1p46lUsZSXXKzQeUBxulpIYFWx8jlYJGHZ54bV5ThcmmqkkwqWbzJFi4Cpap6DH4\nlRw9xb0n6BYtLXS1d0uKdfMwS46GSvGU4YSWnFNv1GktwtSeJXXO8i4pU9nrCJ2iJjGrGIwb/CpV\nYYJDY8wmrAxNFV7Y4DrswYannmM6lNHQQU/RyO6RwNKYnJgkFrqtwPcaua1YGKaQCeyMRng5eaXv\nTBd6ZMhIgw1DtrVOPpAT5NibaMptckECWpnGGC1ZnbCmcMIoWBPu94EseJuGYumGcYF17NqA76no\n5KqScJGqaRi+Qi3MwH2nWcN3NhrS4YU98JoRyiiWDAnKpWhUBP6w7QzeYJTbnivywkLInXmJRq5R\nUCyAaKg2iVmqqAiJa025MwuG4DkiWlkripwlHTEi94lCflgraurhlrKuRpQG3GpUbkXmIcMs47Y3\n/Nq4F1oYdugg3sxZhjqPGlHYsuhBzUU9YfvLeAqnzyIXucifUz4O89h7vXd8svfiZL25OFqfvfz9\nC6mHeeN5C6yxONpJPTzwwHufwd4BCHHeDpESmNydJzCvIC7Eg957DaTohMeAUPMZTboCIZQcpOC0\n5vndBWBEIMfJ7jPjCJhtQTkk0BpkJHClldx5tOdKXtFIQUAi6EMVkBLyFsv3JoHeShUdoyQnxjkS\naISgDM6UOVRmTKYOhoIWYKiQTAjY02hBQTT4SrFsBG4QjuyRgNKsB18pQOEALuOCdZBEEIsa3cE6\nhGO40wI0h95jG9A3oiy9ChEe7ElnetGMFIRJAouYw3N6GuExfwRCk5kICbMlQQEAn8BwcBNQgT55\nR44A955nygCmEJwRrLKSKgxSBhA6bFYnyRrS53HBToNHDcstmAi9KWAy4DgMxZGtNGjGUyW/qMh4\n76Qe4KvKRm1zaKgei5QjV8K1MkleyoXUwzSYAQsgcp8HQmNmyFjnWR0UppI9GEwEVzALX4D6IA09\n+ASjYTrFI4tgGhKpUlaYUZeB9BJ0Ajya1ANukevpQKF6jCBmC8ICGhislMGQNWmFW8FB+73roB6S\n5i24pz0VHS28G1R9AqfPIhe5yJ9TPg7zeHF2drHZ3ztfPYxrFEL7tMhFPkw+gd/ZIhe5yJ9TPtLd\n/fL+/tvJOrAFfLzwFJz5okC088lGRaOK8p4cPbhPtu99J1qR4sw3TrXW5nzaUxtfRulAQ/iERB/L\nk2618OHS/1MeUBZ/Epu7yEUu8hPycVA45r86X68PVg/DYN6v/Kifqnxu+929ED4Yt86n7DVA+xtZ\ncZ/M+TYatqyF3a9jC6ti7U9azp8bXT7L5yt/rj5e/QcReT2YiSwAAA\u003d\u003d"}`;
originStr = originStr.substring(0, 1500);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: originStr,
      length: originStr.length,
      size: 600,
      correct: 3,
      hasReact: false
    }
    this.caoliao = React.createRef();
    this.qrcode = React.createRef();
  }

  createQrcode = () => {
    console.log('生成二维码');
    if (this.caoliao.current) {
      this.caoliao.current.createQrcode();
    }
    if (this.qrcode.current) {
      this.qrcode.current.createQrcode();
    }
  }

  render() {
    const {text, size, length, correct, hasReact} = this.state;
    return (
      <section>
        <textarea
          style={{width: '100%', height: '150px'}}
          onInput={(e) => this.setState({text:e.target.value, length: e.target.value.length})}
        >
          {text}
        </textarea>
        <label>正确率(0,1,2,3)：</label><input value={correct} onInput={(e) => this.setState({correct: parseInt(e.target.value) || 0})} />
        <br />
        <label>物理尺寸：</label><input value={size} onInput={(e) => this.setState({size: parseInt(e.target.value) || 400})} />
        <br />
        <label>字符长度：</label><span>{length}</span>
        <br />
        <button onClick={this.createQrcode}>生成二维码</button>
        <button onClick={() => this.setState({hasReact: !hasReact})}>{hasReact ? '隐藏react qrcode' : '显示react qrcode'}</button>
        <ul>
          <li>
            <Caoliao ref={this.caoliao} text={text} size={size} correct={correct} />
          </li>
          <li style={{marginRight: '20px'}}>
            <Qrcode ref={this.qrcode} text={text} size={size} correct={correct} />
          </li>
          {hasReact && (<li style={{marginRight: '20px'}}>
            <ReactQrcode text={text} size={size} correct={correct} />
          </li>)}
        </ul>
      </section>
    );
  }
}

export default App;
