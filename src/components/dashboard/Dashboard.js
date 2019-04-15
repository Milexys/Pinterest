import React, { Component } from 'react';
import Unsplash from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroll-component';
import Modal from '../modal/Modal';
import './dashboard.css';
import Pictures from './Images'

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
            isShowing: false,
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
                imgURL.push(img.urls.small)
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
                imgNewURL.push(img.urls.small)
            }
            this.setState({
                ...this.state,
                images: this.state.images.concat(imgNewURL)
            })
        })
      console.log(this.state.images)
    }

    openModalHandler = (i) => {
        this.setState({
            isShowing: i.url
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    getImages(){
        const showImages = this.state.images.map((image, i) => {
            return (
                <Pictures
                key={i}
                pushClick={this.openModalHandler}
                url={image}>
                </Pictures>
            )
        })
        return showImages;
    }

    render(){
        return (
            <div className="masonry">
            {this.state.isShowing && <Modal pushClick={this.closeModalHandler} imgUrl={this.state.isShowing}></Modal>}
                <InfiniteScroll
                dataLength={this.state.images.length}
                next={this.handleMore}
                hasMore={true}
                loader={<h4 style={{textAlign: "center"}}>Loading...</h4>}
                >         
                {this.state.images && this.getImages()}
                </InfiniteScroll>
            </div>
        ) 
    }
}

export default Dashboard;