import React from 'react';
import axios from 'axios';
import '../../../css/professionalprogress.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import EditPopup from '../../Popups/Popup';
import ApplicationEdit from '../Forms/ApplicationEdit';

class ProfessionalProgress extends React.Component {
    state={
        id:localStorage.getItem("id"),
        invite:0,
        invites:[],
        work:[],
        reviews:0,
        totalWork:0,
        editPopup:false
    }

    componentDidMount=()=>{
        this.totalReviews()
        this.totalInvite()
        this.totalApplication()
        setTimeout(() =>this.work(), 500);
    }

    totalReviews=()=>{
        axios.get("https://rojgar-backend.herokuapp.com/review/professional/"+this.state.id).then(res=>{
            this.setState({reviews:res.data.data.length})
        }).catch(err=>{
            console.log(err);
        })
    }

    totalInvite= ()=>{
        axios.get("https://rojgar-backend.herokuapp.com/job/invite/"+this.state.id).then(res=>{
            this.setState({invite:res.data.data.length})
            this.setState({invites:res.data.data})
        }).catch(err=>{
            alert(err)
        })
    }

    totalApplication=()=>{
        axios.get("https://rojgar-backend.herokuapp.com/my/application/"+this.state.id).then(res=>{
            const workData = res.data.data.reverse()
            this.setState({work:workData})
        }).catch(err=>{
            alert(err)
        })
    }

    work=()=>{
        var total = 0;
        var jobInvite = this.state.invites.filter(function(invite){
            return invite.status == "true"
        })
        var application = this.state.work.filter(function(work){
            return work.status == "true"
        })
        console.log(application.length)
        total= total + jobInvite.length + application.length
        this.setState({totalWork:total})
    }
    deteteApplication=(id)=>{
        axios.delete("https://rojgar-backend.herokuapp.com/application/delete/"+id).then(res=>{
            window.location.href="/professional/progress"
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
                                <h4>Work Done</h4>
                                <p>{this.state.totalWork}</p>
                            </div>
                            <div className="professional-progress-detail-card">
                                <h4>Reviews</h4>
                                <p>{this.state.reviews}</p>
                            </div>
                            <div className="professional-progress-detail-card">
                                <h4>Invite</h4>
                                <p>{this.state.invite}</p>
                            </div>
                            <div className="professional-progress-detail-card">
                                <h4>Earing</h4>
                                <p> Rs 0.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="professional-progress-detail-bottom">
                        <h3>My Application</h3>
                    {
                        this.state.work.map((work)=>{
                            return(
                            <div className="professional-progress-application">
                                <EditPopup title="Edit Your Job Application" openPopup = {this.state.editPopup}  setOpenPopup = {()=>this.setState({editPopup:false})}>
                                    <ApplicationEdit  id={work._id}  />
                                </EditPopup>
                            <h4>{work.worktitle}</h4>
                            <div className="application-progress-verify">
                                <p >My Proposal</p>
                                {   work.status == "ongoing" ?
                                    (
                                        <p><span>not reviewed</span></p>
                                    ): work.status == "true" ? (
                                        <p><span>accepted</span><VerifiedUserIcon /></p>
                                    ):(
                                        <p><span>rejected</span></p>
                                    )
                                }
                            </div>
                            <div className="application-progress-proposal">
                                <p>{work.application}</p>
                                <div className="application-progress-action">
                                    <button onClick={()=>this.deteteApplication(work._id)}>delete</button>
                                    <button onClick={()=>this.setState({editPopup:true})}>edit</button>
                                </div>
                                
                            </div>
                        </div>
                            )
                        }
                        )
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfessionalProgress
