import React from 'react'
import StarRatings from 'react-star-ratings';
import ProfessionalDetail from '../Find/ProfessionalDetail';
import SlidePopup from "react-sliding-pane";
import { Link } from "react-router-dom";
import axios from 'axios';
import '../../css/popup.css';

class ProfessionalCard extends React.Component {
    state={
        reviews:[],
        totalRating:0,
        profileDetail:false
    }
    componentDidMount=()=>{
        this.retriveRating()
        setTimeout(() =>this.ratingTotal() , 1000)
    }
    retriveRating=()=>{
        axios.get("https://rojgar-backend.herokuapp.com/review/professional/"+this.props.id).then(res=>{
           this.setState({
               reviews:res.data.data
           })  
        }).catch(err=>{
            console.log(err);
        })
    }
    ratingTotal=()=>{
        if(this.state.reviews.length == 0){
            this.setState({
                totalRating:0
            })
        }else{
            var total = 0;
            var value = this.state.reviews.map(review=> review["rating"])
            for (let i =0; i<this.state.reviews.length; ++i){
                total = total + value[i];
            }
            total = total/this.state.reviews.length
            this.setState({
                totalRating:total
            })
        }
    }
    render(){
        return (
            <div className="professionalcard-container">
                <div className="professionalcard-container-top">
                    <div className="professionalcard-img" onClick={()=>this.setState({profileDetail:true})}>
                        {
                            this.props.img == "noImage.jpg" ? <img src="https://res.cloudinary.com/rojgar-com/image/upload/v1629620757/user_copllo.png" /> : <img src={this.props.img} />
                        }
                    </div>
                    <div className="professionalcard-title"    >
                        <h3>{this.props.firstname + " " + this.props.lastname}</h3>
                        <h5>{this.props.profession}</h5>
                        <p>{this.props.address}</p>
                    </div>
                </div>
                <div className="professionalcard-info">
                    <div className="professionalcard-info-top">
                        <p>&#x20B9;{this.props.payrate}</p>
                        <StarRatings
                            rating={this.state.totalRating}
                            starDimension="20px"
                            starSpacing="5px"
                            starRatedColor="purple"
                        />
                        <Link to={"/job/request/"+this.props.id}><button className="hire">Request</button></Link>
                    </div>
                    <div className="professionalcard-info-bottom">
                        <p>{this.props.description}</p>
                    </div>
                </div>
                <SlidePopup  title ="More Profile Details" isOpen={this.state.profileDetail} onRequestClose  ={()=>this.setState({profileDetail:false})}>
                    <ProfessionalDetail id={this.props.id}/>
                </SlidePopup>
            </div> 
        )
    }
}

export default ProfessionalCard
