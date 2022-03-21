import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { baseUrl } from '../shared/baseUrl';

function MenuItems() {
    const [appitems, setAppItems] = useState([]);
    useEffect(() => { 
        axios.get(baseUrl + '/appetizer').then((response) => {
            setAppItems(response.data);
        });
    }, [setAppItems]);

    const appetizerList = appitems.map(appetizers => {
        return (
            <Col key={appetizers.id} className='col-md-4'>
                <RenderAppetizerItem appetizers={appetizers} />
            </Col>
        )
    })

    const [saladitems, setSaladItems] = useState([]);
    useEffect(() => { 
        axios.get(baseUrl + '/salad').then((response) => {
            setSaladItems(response.data);
        });
    }, [setSaladItems]);

    const saladList = saladitems.map(salads => {
        return (
            <Col key={salads.id} className='col-md-4'>
                <RenderSaladItem salads={salads} />
            </Col>
        )
    })

    const [steakitems, setSteakItems] = useState([]);
    useEffect(() => { 
        axios.get(baseUrl + '/steak').then((response) => {
            setSteakItems(response.data);
        });
    }, [setSteakItems]);

    const steakList = steakitems.map(steaks => {
        return (
            <Col key={steaks.id} className='col-md-4'>
                <RenderSteakItem steaks={steaks} />
            </Col>
        )
    })

    const [chickenitems, setChickenItems] = useState([]);
    useEffect(() => { 
        axios.get(baseUrl + '/chicken').then((response) => {
            setChickenItems(response.data);
        });
    }, [setChickenItems]);

    const chickenList = chickenitems.map(chickens => {
        return (
            <Col key={chickens.id} className='col-md-4'>
                <RenderChickenItem chickens={chickens} />
            </Col>
        )
    })

    const [burgeritems, setBurgerItems] = useState([]);
    useEffect(() => { 
        axios.get(baseUrl + '/burger').then((response) => {
            setBurgerItems(response.data);
        });
    }, [setBurgerItems]);

    const burgerList = burgeritems.map(burgers => {
        return (
            <Col key={burgers.id} className='col-md-4'>
                <RenderBurgerItem burgers={burgers} />
            </Col>
        )
    })

    const [seafooditems, setseafoodItems] = useState([]);
    useEffect(() => { 
        axios.get(baseUrl + '/seafood').then((response) => {
            setseafoodItems(response.data);
        });
    }, [setseafoodItems]);

    const seafoodList = seafooditems.map(seafoods => {
        return (
            <Col key={seafoods.id} className='col-md-4'>
                <RenderSeafoodItem seafoods={seafoods} />
            </Col>
        )
    })

    const [dessertitems, setDessertItems] = useState([]);
    useEffect(() => { 
        axios.get(baseUrl + '/dessert').then((response) => {
            setDessertItems(response.data);
        });
    }, [setDessertItems]);

    const dessertList = dessertitems.map(desserts => {
        return (
            <Col key={desserts.id} className='col-md-4'>
                <RenderDessertItem desserts={desserts} />
            </Col>
        )
    })

    return (
        <Container className='p-1'>
            <Row className='p-2'>
                <h1 className='text-center'>
                Appetizers
                </h1>
                {appetizerList}
            </Row>
            <Row className='p-2'>
                <h1 className='text-center'>
                Salads
                </h1>
                {saladList}
            </Row>
            <Row className='p-2'>
                <h1 className='text-center'>
                Steaks
                </h1>
                {steakList}
            </Row>
            <Row className='p-2'>
                <h1 className='text-center'>
                Chicken
                </h1>
                {chickenList}
            </Row>
            <Row className='p-2'>
                <h1 className='text-center'>
                Burgers
                </h1>
                {burgerList}
            </Row>
            <Row className='p-2'>
                <h1 className='text-center'>
                Seafood
                </h1>
                {seafoodList}
            </Row>
            <Row className='p-2'>
                <h1 className='text-center'>
                Desserts
                </h1>
                {dessertList}
            </Row>
        </Container>
    )
}

function RenderAppetizerItem({appetizers}) {
    return (
        <Card className='m-1'>
            <Card.Img src={appetizers.image}>
                
            </Card.Img>
            <Card.Body>
                <Card.Title>
                    {appetizers.name}
                </Card.Title>
                <Card.Text>
                    {appetizers.price}<br/>{appetizers.description}
                </Card.Text>
        </Card.Body>
        </Card>
    );
}

function RenderSaladItem({salads}) {
    return (
        <Card className='m-1'>
            <Card.Img src={salads.image}>
                
            </Card.Img>
            <Card.Body>
                <Card.Title>
                    {salads.name}
                </Card.Title>
                <Card.Text>
                    {salads.price}<br/>{salads.description}
                </Card.Text>
        </Card.Body>
        </Card>
    );
}

function RenderSteakItem({steaks}) {
    return (
        <Card className='m-1'>
            <Card.Img src={steaks.image}>
                
            </Card.Img>
            <Card.Body>
                <Card.Title>
                    {steaks.name}
                </Card.Title>
                <Card.Text>
                    {steaks.price}<br/>{steaks.description}
                </Card.Text>
        </Card.Body>
        </Card>
    );
}

function RenderChickenItem({chickens}) {
    return (
        <Card className='m-1'>
            <Card.Img src={chickens.image}>
                
            </Card.Img>
            <Card.Body>
                <Card.Title>
                    {chickens.name}
                </Card.Title>
                <Card.Text>
                    {chickens.price}<br/>{chickens.description}
                </Card.Text>
        </Card.Body>
        </Card>
    );
}

function RenderBurgerItem({burgers}) {
    return (
        <Card className='m-1'>
            <Card.Img src={burgers.image}>
                
            </Card.Img>
            <Card.Body>
                <Card.Title>
                    {burgers.name}
                </Card.Title>
                <Card.Text>
                    {burgers.price}<br/>{burgers.description}
                </Card.Text>
        </Card.Body>
        </Card>
    );
}

function RenderSeafoodItem({seafoods}) {
    return (
        <Card className='m-1'>
            <Card.Img src={seafoods.image}>
            </Card.Img>
            <Card.Body>
                <Card.Title>
                    {seafoods.name}
                </Card.Title>
                <Card.Text>
                    {seafoods.price}<br/>{seafoods.description}
                </Card.Text>
        </Card.Body>
        </Card>
    );
}

function RenderDessertItem({desserts}) {
    return (
        <Card className='m-1'>
            <Card.Img src={desserts.image}>
            </Card.Img>
            <Card.Body>
                <Card.Title>
                    {desserts.name}
                </Card.Title>
                <Card.Text>
                    {desserts.price}<br/>{desserts.description}
                </Card.Text>
        </Card.Body>
        </Card>
    );
}

export default MenuItems;