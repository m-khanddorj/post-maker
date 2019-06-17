import React from 'react';
import {
  Form,
} from 'react-bootstrap';

const Inputs = (props)=>{
    const {handleChange,text,background} = props;

    return(<Form>
        <h3>Бичвэр</h3>
        <Form.Group>
            <Form.Label>
                Бичвэр:
            </Form.Label>
            <Form.Control onChange = {handleChange} name = 'text.content' as="textarea" value = {text.content} />

            <Form.Label>
                Фонт:
            <Form.Control onChange = {handleChange} name = 'text.font' as = 'select' value = {text.font}>
                <option value = 'Oswald' > Oswald </option>
                <option value = 'Comfortaa' > Comfortaa </option>
                <option value = 'Lobster' > Lobster </option>
                <option value = 'Philosopher' > Philosopher </option>
            </Form.Control>
            </Form.Label>

            <Form.Label>
                Бичвэрийн хэмжээ:
            <Form.Control onChange = {handleChange} name = 'text.size' type = 'number' value = {text.size}/>
            </Form.Label>

            <Form.Label>
                Бичвэрийн байрлал:
            </Form.Label>
            <Form.Group>
                <Form.Label>x: </Form.Label> 
                <Form.Control onChange = {handleChange} type = 'number' name = 'text.x' value = {text.x}/>
                <Form.Label>y: </Form.Label> 
                <Form.Control onChange = {handleChange} type = 'number' name = 'text.y' value = {text.y}/>
            </Form.Group>
        </Form.Group>

        <h3>Зураг</h3>
        <Form.Control onChange = {handleChange} type = 'file' accept = '.jpg, .png, .jpeg, .webp' name = 'background.img' />

        <Form.Label>
                Зургийн байрлал:
            </Form.Label>
            <Form.Group>
                <Form.Label>x: </Form.Label> 
                <Form.Control onChange = {handleChange} type = 'number' name = 'background.x' value = {background.x}/>
                <Form.Label>y: </Form.Label> 
                <Form.Control onChange = {handleChange} type = 'number' name = 'background.y' value = {background.y}/>
            </Form.Group>
    </Form>)
}

export default Inputs;