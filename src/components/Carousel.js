import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";


import Card from '../components/Card';

import jorge from'../components/images/fitnesstracker.png';
import project1 from'../components/images/budgettracker.PNG';
import project2 from'../components/images/project2.png';


class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items:[ 
             {   
                id:0,
                Title:'Fitness Tracker',
                subTitle:'Fitness Tracker',
                imgSrc: jorge,
                link:"https://github.com/jamjorge21/fitness-tracker",
                selected: false
            },
            {
                id:1,
                Title:'Budget Tracker',
                subTitle:'Budget Tracker',
                imgSrc: project1,
                link:"https://github.com/jamjorge21/Budget-tracker",
                selected: false
            },
             {
                id:2,
                Title:'Project 2',
                subTitle:'Freebeez',
                imgSrc: project2,
                link:"Find link on github for project 3",
                selected: false
            },
        
    ]
}

}

handleCardClick = (id,card) =>{
    console.log(id);
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;
    

    items.forEach(item =>{
        if(item.id !== id){
            item.selected = false;
        }
    });

    this.setState({
        items
    });
}



    makeItems = (items) =>{
        return items.map(item =>{
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }


}

export default Carousel;
