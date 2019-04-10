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
            start: 1,
            count: 20,
        }

    }
    componentDidMount(){
       const { start, count } = this.state
        unsplash.photos.listPhotos(start, count, "latest")
        .then(response => response.json())
        .then(toJson => {
            let data = toJson;
            let imgURL = []
            for (let i = 0; i < 20; i ++){
                let img = data[i]
                imgURL.push(img.urls.thumb)
            }
            this.setState({
                ...this.state,
                images: imgURL
            })
        })
    }

    handleMore = () => {
        const { start, count } = this.state
        let start1 = start + count;
        this.setState({
            start: start1,
        })
        unsplash.photos.listPhotos(start1, count, "latest")
        .then(response => response.json())
        .then(toJson => {
            let newData = toJson
            let imgNewURL = [];
            for (let i = 0; i < 20; i++){
                let img = newData[i]
                imgNewURL.push(img.urls.thumb)
            }
            this.setState({
                ...this.state,
                images: this.state.images.concat(imgNewURL)
            })
        })
      console.log(this.state.images)
    }
    openModal(){
        
    }
    render(){
        return (
            <div className="masonry">
                <InfiniteScroll
                dataLength={this.state.images.length}
                next={this.handleMore}
                hasMore={true}
                loader={<h4 style={{textAlign: "center"}}>Loading...</h4>}
                >
                      {this.state.images.map(image => {
                        return (
                            <div className="item" key={image.id}>
                                <img className="image" src={image} onClick={this.openModal} alt="img"/>
                                <i className="material-icons">more_horiz</i>
                           </div>
                        )
                    })
                    }
                </InfiniteScroll>
            </div>
        ) 
    }
}

export default Dashboard;