import React, {Component} from 'react';
import QRCode from 'qrcode'

const LEVEL = {
  0: 'L',
  1: 'M',
  2: 'Q',
  3: 'H'
};

class Qrcode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: '',
      correct: ''
    }
  }
  createQrcode = () => {
    const {size, text, correct} = this.props;
    try {
      QRCode.toDataURL(text, {type: 'image/png', height: size, width: size, errorCorrectionLevel: LEVEL[correct]})
      .then(url => {
        this.setState({
          imgSrc: url,
          correct: '成功'
        });
      })
      .catch(err => {
        this.setState({
          correct: '失败'
        });
        console.error(err);
      });
    } catch(e) {
      this.setState({
        correct: '失败'
      });
      console.error(e);
    }
  }

  render() {
    return (
      <div>
        <h4>npm qrcode</h4>
        <label>结果：</label><span>{this.state.correct}</span>
        <br />
        <br />
        <img style={{marginLeft: '300px'}} src={this.state.imgSrc} alt='二维码' />
      </div>
    );
  }
}

export default Qrcode;
