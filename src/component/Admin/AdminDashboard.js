import axios from 'axios';
import React from 'react';
import "./admindashboard.css";

class AdminDashboard extends React.Component {
    state ={
        totalUser:0,
        user:0,
        professional:0,
        post:0,
        invite:0,
        applicaiton:0,
        review:0,
        onGoing:0
    }

    componentDidMount=()=>{
        this.countProfessional();
        this.countUser();
        this.countPost();
        this.countReview();
        this.countInvite();
        this.countApplication();
        this.countOngoingJob();
    }

    countProfessional= ()=>{
        axios.get("https://rojgar-backend.herokuapp.com/show/professional").then((res=>{
            this.setState({
                professional:res.data.data.length
            })
        }))
        .catch(err=>{
            alert(err);
        })
    }
    countUser= ()=>{
        axios.get("https://rojgar-backend.herokuapp.com/show/user").then((res=>{
            this.setState({
                user:res.data.data.length
            })
        }))
        .catch(err=>{
            alert(err);
        })
    }
    countPost= ()=>{
        axios.get("https://rojgar-backend.herokuapp.com/all/job").then((res=>{
            this.setState({
                post:res.data.data.length
            })
        }))
        .catch(err=>{
            alert(err);
        })
    }
    countReview= ()=>{
        axios.get("https://rojgar-backend.herokuapp.com/all/review").then((res=>{
            this.setState({
                review:res.data.data.length
            })
        }))
        .catch(err=>{
            alert(err);
        })
    }
    countInvite= ()=>{
        axios.get("https://rojgar-backend.herokuapp.com/all/invite").then((res=>{
            this.setState({
                invite:res.data.data.length,
                request:res.data.data.length
            })
        }))
        .catch(err=>{
            alert(err);
        })
    }
    countApplication= ()=>{
        axios.get("https://rojgar-backend.herokuapp.com/all/application").then((res=>{
            this.setState({
                applicaiton:res.data.data.length
            })
        }))
        .catch(err=>{
            alert(err);
        })
    }
    countOngoingJob= ()=>{
        axios.get("https://rojgar-backend.herokuapp.com/all/job/post").then((res=>{
            this.setState({
                onGoing:res.data.data.length
            })
        }))
        .catch(err=>{
            alert(err);
        })
    }
    render() {
        return (
            <div className="admin-dashboard-container">
                <div className="admin-dashboard">
                    <h2>Admin Dashboard</h2>
                    <div className="admin-dashboard-top">
                        <h4>Statistics of Rojgar.com</h4>
                        <div className="admin-dashboard-top-data">
                            <div className="admin-dashboard-item-cart">
                                <div className="admin-dash-item-count">
                                    <h1>{this.state.user + this.state.professional}</h1    >
                                    <p>total user</p>
                                </div>
                                <img src="https://res.cloudinary.com/rojgar-com/image/upload/v1630064185/team_dmnach.png" />
                            </div>
                            <div className="admin-dashboard-item-cart">
                                <div className="admin-dash-item-count">
                                    <h1>{this.state.user}</h1    >
                                    <p>normal user</p>
                                </div>
                                <img src="https://res.cloudinary.com/rojgar-com/image/upload/v1630064184/profile_1_yjgch7.png" />
                            </div>
                            <div className="admin-dashboard-item-cart">
                                <div className="admin-dash-item-count">
                                    <h1>{this.state.professional}</h1    >
                                    <p>professionals</p>
                                </div>
                                <img src="https://res.cloudinary.com/rojgar-com/image/upload/v1630064184/architect_bpmvjo.png" />
                            </div>
                            <div className="admin-dashboard-item-cart">
                                <div className="admin-dash-item-count">
                                    <h1>{this.state.post}</h1    >
                                    <p>total post</p>
                                </div>
                                <img src="https://res.cloudinary.com/rojgar-com/image/upload/v1630064184/social-media_adhpnb.png" />
                            </div>
                        </div>
                    </div>
                    <div className="admin-dashboard-top">
                        <h4>Statistics of User Activity</h4>
                        <div className="admin-dashboard-top-data">
                            <div className="admin-dashboard-item-cart">
                                <div className="admin-dash-item-count">
                                    <h1>{this.state.invite}</h1    >
                                    <p>total invites</p>
                                </div>
                                <img src="https://res.cloudinary.com/rojgar-com/image/upload/v1630064184/invitation_ys5te8.png" />
                            </div>
                            <div className="admin-dashboard-item-cart">
                                <div className="admin-dash-item-count">
                                    <h1>{this.state.review}</h1    >
                                    <p>total reviews</p>
                                </div>
                                <img src="https://res.cloudinary.com/rojgar-com/image/upload/v1630064184/review_ssjok9.png" />
                            </div>
                            <div className="admin-dashboard-item-cart">
                                <div className="admin-dash-item-count">
                                    <h1>{this.state.applicaiton}</h1    >
                                    <p> applications</p>
                                </div>
                                <img src="https://res.cloudinary.com/rojgar-com/image/upload/v1630064184/resume_vrln85.png" />
                            </div>
                            <div className="admin-dashboard-item-cart">
                                <div className="admin-dash-item-count">
                                    <h1>{this.state.post-this.state.onGoing}</h1    >
                                    <p>success work</p>
                                </div>
                                <img src="https://res.cloudinary.com/rojgar-com/image/upload/v1630076537/complete_v7svcm.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminDashboard
