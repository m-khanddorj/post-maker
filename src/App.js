import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import background from './images/backgrounds/1.png';
import Inputs from './components/Inputs';
import Post from './components/Post'


class App extends React.Component{
  reader = new FileReader();
    
  state = {
    // text states
    text: {
      content:'',
      size: 20,
      font: 'Oswald',
      x: 0,
      y: 0,
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
  render(){
    return(<Container fluid>
      <Row>
        <Col sm = {3}>
          <Inputs 
            text = {this.state.text}
            background = {this.state.background}
            handleChange = {this.handleChange}
          />
        </Col>
        <Col sm = {9}>
          <Post
            text = {this.state.text}
            background = {this.state.background}
          />
        </Col>
      </Row>
    </Container>
    )
  }  
}

export default App;
