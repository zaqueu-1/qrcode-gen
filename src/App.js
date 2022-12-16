import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import './App.css';

function App() {
const [link, setLink] = useState('')
const [qrDownload, setQRDownload] = useState('')

function handleGenerate(link_url) {
  QRCodeLink.toDataURL(link_url, {
    width: 600,
    margin: 3,
  }, function(err, url){
    setQRDownload(url);
  })
}

function handleQrCode(e) {
  setLink(e.target.value);
  handleGenerate(e.target.value);
}

  return (
    <div className="container">
      <h1>QR Code Generator</h1>
      <h4>easy, simple and free!</h4>

    <QRCode value={ link }/>

      <input 
      className="input" 
      placeholder="enter your url here!"
      value={ link }
      onChange={ (e) => handleQrCode(e) }/>

      <button><a href={ qrDownload } download={`qrcode.png`}>Download</a></button>
      <a class='footer' href='https://github.com/zaqueu-1'><h5>get in touch: click here!</h5></a>
    </div>
  );
}

export default App;
