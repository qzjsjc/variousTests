import React, {Component} from 'react';
import QRCode from 'qrcode.react';

const LEVEL = {
  0: 'L',
  1: 'M',
  2: 'Q',
  3: 'H'
};

class ReactQrcode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: '',
      correct: ''
    }
  }

  render() {
    const {size, text, correct} = this.props;
    return (
      <div>
        <h4>react qrcode</h4>
        <br />
        <br />
        <QRCode style={{marginLeft: '300px'}} value={text} size={size} level={LEVEL[correct]} renderAs='canvas' />
      </div>
    );
  }
}

export default ReactQrcode;
