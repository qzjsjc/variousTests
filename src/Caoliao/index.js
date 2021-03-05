import React, {Component} from 'react';
import '../common/createCode';

$QRCodeMakerAutoLevel(originStr, {
  correct: 3,
  width: 600,
  height: 600
}, (res) => {
  document.getElementById('img').setAttribute('src', res.base64);
});

class Caoliao extends Component {
  render() {
    return (
      <div>
        <label>字符长度：</label><span id='length'></span>
        <br />
        <br />
        <img id='img' src='' alt='二维码' />
      </div>
    );
  }
}

export default Caoliao;
