import React from 'react';
import {
  Form, Button,
} from 'react-bootstrap';

const Inputs = (props)=>{
    const {handleChange,text,background,download} = props;

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
                <option value = 'LobsterTwo' > Lobster II </option>
                <option value = 'Philosopher' > Philosopher </option>
            </Form.Control>
            </Form.Label>

            <Form.Label>
                Бичвэрийн хэмжээ:
                <Form.Control onChange = {handleChange} name = 'text.size' type = 'number' value = {text.size}/>
            </Form.Label>

            <Form.Label>
                Бичвэрийн өнгө:
                <Form.Control onChange = {handleChange} name = 'text.color' type = 'color' value = {text.color}/>
            </Form.Label>

            <Form.Label>
                Суурь өнгө:
                <Form.Control onChange = {handleChange} name = 'text.backgroundColor' type = 'color' value = {text.backgroundColor}/>
            </Form.Label>

            <Form.Label>
                Суурь үзэгдэц:
                <Form.Control 
                    onChange = {handleChange} 
                    name = 'text.backgroundOpacity' 
                    type = 'number' 
                    value = {text.backgroundOpacity}
                    min = {0}
                    max = {255}
                />
            </Form.Label>

            <br/>
            <Form.Label>
                Бичвэрийн байрлал:
            </Form.Label>
            <br/>
            <Form.Label>x: </Form.Label> 
            <Form.Control onChange = {handleChange} type = 'number' name = 'text.x' value = {text.x}/>
            <Form.Label>y: </Form.Label> 
            <Form.Control onChange = {handleChange} type = 'number' name = 'text.y' value = {text.y}/>
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

        <Form.Group>
            <Form.Label>
                Зургийн төрөл:
            </Form.Label>
            <Form.Control as = 'select' name = 'text.type' onChange = {handleChange}>
                <option value = '0'>Өргөнд тааруулах</option>
                <option value = '1'>Уртад тааруулах</option>
            </Form.Control>
        </Form.Group>

        <Form.Group>
            <Button onClick = {download}>
                Татах
            </Button>
        </Form.Group>

    </Form>)
}

export default Inputs;