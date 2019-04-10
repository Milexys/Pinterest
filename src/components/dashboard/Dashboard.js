import React, { Component } from 'react';
import Unsplash from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroll-component'
import './dashboard.css';

const unsplash = new Unsplash({
    applicationId: "ded631ac9ff44d2e2d3e36f72cb1e95229e65a75eee4614d4ddec04921d34f88",
    secret: "ded631ac9ff44d2e2d3e36f72cb1e95229e65a75eee4614d4ddec04921d34f88"
  });

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            images: [],
            images0: [],
            images1: [],
            images2: [],
            images3: [],
            start: 1,
            count: 20,
        }

    }
    componentDidMount(){
       const { start, count } = this.state
        unsplash.photos.listPhotos(start, count, "latest")
        .then(response => response.json())
        .then(data => this.setState({
            ...this.state,
            images: data
        }))
        .then(data => {
            let img0 = [];
            let img1 = [];
            let img2 = [];
            let img3 = [];

            for (let i = 0; i < 5; i++){
                let randomImg = this.state.images[i]
                img0.push(randomImg.urls.full);
            }
            for (let i = 5; i < 10; i++){
                let randomImg = this.state.images[i]
                img1.push(randomImg.urls.full);
            }
            for (let i = 10; i < 15; i++){
                let randomImg = this.state.images[i]
                img2.push(randomImg.urls.full);
            }
            for (let i = 15; i < 20; i++){
                let randomImg = this.state.images[i]
                img3.push(randomImg.urls.full);
            }
            this.setState({
                ...this.state,
                    images0: img0,
                    images1: img1,
                    images2: img2,
                    images3: img3,
               })
        })
    }

    handleMore = () => {
        const { start, count } = this.state
        this.setState({
            start: this.state.start + count,
        })
        unsplash.photos.listPhotos(start, count, "latest")
        .then(response => response.json())
        .then(data => this.setState({
            ...this.state,
            images: this.state.images.concat(data)
        }))
        .then(data => {
            let img0 = [];
            let img1 = [];
            let img2 = [];
            let img3 = [];

            for (let i = 20; i < 25; i++){
                let randomImg = this.state.images[i]
                img0.push(randomImg.urls.full);
            }
            for (let i = 25; i < 30; i++){
                let randomImg = this.state.images[i]
                img1.push(randomImg.urls.full);
            }
            for (let i = 30; i < 35; i++){
                let randomImg = this.state.images[i]
                img2.push(randomImg.urls.full);
            }
            for (let i = 35; i < 40; i++){
                let randomImg = this.state.images[i]
                img3.push(randomImg.urls.full);
            }
            this.setState({
                ...this.state,
                    images0: this.state.images0.concat(img0),
                    images1: this.state.images0.concat(img1),
                    images2: this.state.images0.concat(img2),
                    images3: this.state.images0.concat(img3),
               })
        })
    }

    render(){
        const column0 = this.state.images0.map(image =>{
            return (   
                <div className="card" key={image.id}>
                    <img className="image" src={image} alt="img"/>
                    <i className="material-icons">more_horiz</i>
                </div>
            )
        })
        const column1 = this.state.images1.map(image =>{
            return (   
                <div className="card" key={image.id}>
                    <img className="image" src={image} alt="img"/>
                    <i className="material-icons">more_horiz</i>
                </div>
            )
        })
        const column2 = this.state.images2.map(image =>{
            return (   
                <div className="card" key={image.id}>
                    <img className="image" src={image} alt="img"/>
                    <i className="material-icons">more_horiz</i>
                </div>
            )
        })
        const column3 = this.state.images3.map(image =>{
            return (   
                <div className="card" key={image.id}>
                    <img className="image" src={image} alt="img"/>
                    <i className="material-icons">more_horiz</i>
                </div>
            )
        })
        return (
            <div className="container">
                <InfiniteScroll
                dataLength={this.state.images.length}
                next={this.handleMore}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                >
                    <div className="row">
                        <div className="column">{column0}</div>
                        <div className="column">{column1}</div>
                        <div className="column">{column2}</div>
                        <div className="column">{column3}</div>
                    </div>
                </InfiniteScroll>
            </div>
        ) 
    }
}

export default Dashboard;