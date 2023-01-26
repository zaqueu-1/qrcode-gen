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
      <div style={{display: 'flex', alignItems: 'center'}}>
        <h1>QR Code Me</h1><h5><a href='https://zaqueu.tech'>by zaqueu.tech</a></h5>
      </div>
      <h4>fácil, simples e <u>grátis!</u></h4>

    <QRCode value={ link }/>

      <input 
      className="input" 
      placeholder="insira aqui sua url!"
      value={ link }
      onChange={ (e) => handleQrCode(e) }/>

      <button><a href={ qrDownload } download={`qrcode.png`}>Download!</a></button>
      <a class='footer' href='https://zaqueu.tech'><h5>conheça o desenvolvedor! clique aqui :)</h5></a>
    </div>
  );
}

export default App;
