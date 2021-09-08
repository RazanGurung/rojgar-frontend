import React from 'react';
import axios from 'axios';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import EditPopup from '../../Popups/Popup';
import RequestEdit from '../Forms/RequestEdit';

class UserProgress extends React.Component {
    state={
        id:localStorage.getItem("id"),
        post:0,
        reviews:0,
        request:0,
        requests:[],
        editPopup:false
    }
    componentDidMount=()=>{
        this.totalPost()
        this.totalReviews()
        this.totalRequest()
    }
    totalPost= ()=>{
        axios.get("https://rojgar-backend.herokuapp.com/user/job/post/"+this.state.id).then(res=>{
            this.setState({post:res.data.data.length})
        }).catch(err=>{
            alert(err)
        })
    }
    totalReviews=()=>{
        axios.get("https://rojgar-backend.herokuapp.com/review/user/"+this.state.id).then(res=>{
            this.setState({reviews:res.data.data.length})
        }).catch(err=>{
            console.log(err);
        })
    }
    totalRequest= ()=>{
        axios.get("https://rojgar-backend.herokuapp.com/requested/professional/"+this.state.id).then(res=>{
            this.setState({request:res.data.data.length})
            const requestData = res.data.data.reverse()
            this.setState({requests:requestData})
        }).catch(err=>{
            alert(err)
        })
    }

    deleteRequest=(id)=>{
        axios.delete("https://rojgar-backend.herokuapp.com/delete/request/"+id).then(res=>{
            window.location.href="/user/progress"
        }).catch(err=>{
            alert(err)
        })
    }
    render(){
        return (
            <div className="professional-progress-container">
                <div className="professional-progress-detail">
                    <div className="professional-progress-detail-top">
                        <h3>Your Progress on ROJGAR.COM</h3>
                        <div className="professional-progress-detail-top-count">
                            <div className="professional-progress-detail-card">
                                <h4>Job Post</h4>
                                <p>{this.state.post}</p>
                            </div>
                            <div className="professional-progress-detail-card">
                                <h4>Reviews</h4>
                                <p>{this.state.reviews}</p>
                            </div>
                            <div className="professional-progress-detail-card">
                                <h4>Request</h4>
                                <p>{this.state.request}</p>
                            </div>
                            <div className="professional-progress-detail-card">
                                <h4>Earing</h4>
                                <p> Rs 0.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="professional-progress-detail-bottom">
                        <h3>My Work Request</h3>
                    {
                        this.state.requests.map(request=>
                        <div className="professional-progress-application">
                            <div className="application-progress-user">
                                {
                                    request.profile != "noImage.jpg" ?
                                    <img src={request.profile} /> : <img src="https://res.cloudinary.com/rojgar-com/image/upload/v1629620757/user_copllo.png" />
                                }
                                <p>{request.username}</p>
                            </div>
                            <div className="application-progress-verify">
                                <p >{request.worktitle}</p>
                                {   request.status == "ongoing" ?
                                    (
                                        <p><span>not reviewed</span></p>
                                    ): request.status == "true" ? (
                                        <p><span>accepted</span><VerifiedUserIcon /></p>
                                    ):(
                                        <p><span>rejected</span></p>
                                    )
                                }
                            </div>
                            <div className="application-progress-proposal">
                                <p>{request.workdescription}</p>
                                <div className="application-progress-action">
                                    <button onClick={()=>this.deleteRequest(request._id)}>delete</button>
                                    <button onClick={()=>this.setState({editPopup:true})}>edit</button>
                                </div>
                            </div>
                            <EditPopup title="Edit Your Job Request" openPopup = {this.state.editPopup}  setOpenPopup = {()=>this.setState({editPopup:false})}>
                                <RequestEdit  id={request._id} oldworktitle={request.worktitle} olddescription={request.workdescription} oldpaytype={request.paytype} />
                            </EditPopup>
                        </div>
                        )
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProgress
