import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import background from './images/backgrounds/1.png';
import Inputs from './components/Inputs';
import Post from './components/Post'
import './index.css';
import htmlToImage from 'html-to-image';


class App extends React.Component{
  reader = new FileReader();
    
  state = {
    // text states
    text: {
      content:'',
      size: 20,
      font: 'Oswald',
      backgroundColor: '#000000',
      backgroundOpacity: 125,
      x: 0,
      y: 0,
      type: '0',
      color: '#ffffff'
    },
    // background states
    background:{
      img: background,
      x: 0,
      y: 0
    }
  }

  handleChange = async(evt)=>{
    const {name, value,files} = evt.target;
    const statePath = name.split(".")

    await this.setState(prevState => (
      {
        [statePath[0]] : {
          ...prevState[statePath[0]],
          [statePath[1]]: value
        }
      }
    ))
    if(name === 'background.img'){
      let file = files[0];

      this.reader.onloadend = () => {
        this.setState(prevState =>(
          {
            background:{
              ...prevState.background,
              file:file,
              img: this.reader.result,
            }
          }
        ));
      }


      this.reader.readAsDataURL(file)
    }
    
  }

  download = ()=>{
    var node = document.querySelector('#post');
    htmlToImage.toPng(node)
    .then(function (dataUrl) {
      // var img = new Image();
      // img.src = dataUrl;
      // console.log(dataUrl);
      // document.body.appendChild(img);
      var link = document.createElement('a');
      link.download = "post.png";
      link.href = dataUrl;
      link.click();
      
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error);
    });
 
    // html2canvas(node)
    //   .then(function (canvas) {
    //     var w = window.open("");
    //     w.document.body.appendChild(canvas);
    //     // const dataUrl = canvas.toDataURL();
    //     // var img = new Image();
    //     // img.src = dataUrl;
    //   })
    //   .catch(function (error) {
    //     console.error('oops, something went wrong!', error);
    //   });
  }

  render(){
    return(<Container fluid>
      <Row>
        <Col>
          <Inputs 
            text = {this.state.text}
            background = {this.state.background}
            handleChange = {this.handleChange}
            download = {this.download}
          />
        </Col>
        <Col>
          <div className = 'whatever'>
            <Post
              text = {this.state.text}
              background = {this.state.background}
            />
          </div>
        </Col>
      </Row>
    </Container>
    )
  }  
}

export default App;
