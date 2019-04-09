import React, { Component } from 'react';

const url = `https://pixabay.com/api/?key=12135792-69675227ed8a360a42be867a5`;

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            images: []
        }
    }
    componentDidMount() {
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({
            images: data.hits
        }))
    }
    render(){
        const { images } = this.state;
        return (
            <div className="container">
                {images.map((image, index) => {
                    return (
                        <div className="image" key={index}>
                            <img src={image.largeImageURL} />
                        </div>
                    )
                })}
            </div>
        ) 
    }
}

export default Dashboard;