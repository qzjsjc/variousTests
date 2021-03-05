import React, {Component} from 'react';
import '../common/createCode';

class Caoliao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: '',
      correct: ''
    }
  }
  createQrcode = () => {
    const {size, text, correct} = this.props;
    console.log(correct);
    try {
      $QRCodeMaker(text, {
        correct,
        width: size,
        height: size
      }, (res) => {
        console.log(res);
        this.setState({
          imgSrc: res.base64,
          correct: '成功'
        });
      });
    } catch(e) {
      this.setState({
        correct: '失败'
      });
    }
  }

  render() {
    return (
      <div>
        <h4>草料源码</h4>
        <label>结果：</label><span>{this.state.correct}</span>
        <br />
        <br />
        <img style={{marginLeft: '300px'}} src={this.state.imgSrc} alt='二维码' />
      </div>
    );
  }
}

export default Caoliao;
