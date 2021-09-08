import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import SlidePopup from '../../Popups/SlidingPopup';
import ProfessionalDetail from '../../Find/ProfessionalDetail';
import ReviewPopup from '../../Popups/Popup';
import EditReviewPopup from '../../Popups/Popup';
import Review from '../Forms/Review';
import EditReview from '../Forms/EditReview';
import StarRatings from 'react-star-ratings';
import '../../../css/application.css';

function Application() {
    const [profileDetail, setProfileDetail] = useState(false)
    const params = useParams();
    const id = params.id;
    const [application, setApplication] = useState([])
    const [header, setHeader] = useState("")
    const [workstatus, setWorkstatus] = useState("")
    const [reviewPopup ,setReviewPopup] = useState(false);
    const [editreviewPopup ,setEditReviewPopup] = useState(false);
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        axios.get("https://rojgar-backend.herokuapp.com/single/job/post/"+id).then(res=>{
            setHeader(res.data.data.worktitle);
            setWorkstatus(res.data.data.status);
        }).catch(err=>{
            console.log(err);
        })

        axios.get("https://rojgar-backend.herokuapp.com/view/application/"+id).then(res=>{
            const applicationData = res.data.data.reverse();
            setApplication(applicationData)
        }).catch(err=>{
            console.log(err);
        })

        axios.get("https://rojgar-backend.herokuapp.com/review/"+id).then(res=>{
            const reviewData = res.data.data.reverse();
            setReviews(reviewData);
        }).catch(err=>{
            console.log(err);
        })
    }, [])
    const truth = "true";
    const falsy = "false";
    const changeStatus = (iid,status)=>{
        const data ={
            status:status
        }
        axios.put("https://rojgar-backend.herokuapp.com/applicaiton/status/"+iid,data).then(res=>{
            window.location.href="/application/"+id
        }).catch(err=>{
            alert(err)
        })
        if(status == "true"){
            const data = {
                status : "hired"
            }
            axios.put("https://rojgar-backend.herokuapp.com/post/update/status/"+id,data).then(res=>{
                console.log(res)
            }).catch(err=>{
                alert(err)
            })
        }else{
            const data = {
                status : "ongoing"
            }
            axios.put("https://rojgar-backend.herokuapp.com/post/update/status/"+id,data).then(res=>{
                console.log(res)
            }).catch(err=>{
                alert(err)
            })
        }
    }
    const deteteReview=(rid)=>{
        axios.delete("https://rojgar-backend.herokuapp.com/delete/review/"+rid).then(res=>{
            window.location.href="/application/"+id;
        }).catch(err=>{
            alert(err + rid)
        })
    }
    return (
        <div className="application-container">
            <div className="application-container-body">
                <h3>Application For the Job ({header})</h3>   
                <div className="applicaiton-details-container">
                    <h4 className="applicaiton-details-container-title">Accepted Applications</h4>
                    {  
                        application.length == 0 ? (
                            <div className="application-detail">
                                <p style={{margin:"auto"}}>No application to display.</p>
                            </div>
                        ) : (
                            application.map((application)=>{
                                const status = application.status;
                                return(
                                    status == "true" &&
                                    <div className="application-detail">
                                        <div className="applicant">
                                            <div onClick={()=>setProfileDetail(true)} className="applicant-profile">
                                                <img src={application.profile} />
                                                <div className="applicant-profile-detail">
                                                    <h4>{application.username}</h4>
                                                    <p>{application.profession}</p>
                                                    <p>{application.address}</p>
                                                </div>
                                            </div>
                                            <button onClick={()=>setReviewPopup(true)} className="btn applicant-action">Review on {application.username}'s</button>
                                        </div>
                                        <div className="application-info">
                                            <h4>My Application</h4>
                                            <hr></hr>
                                            <p>{application.application}</p>
                                            <div className="application-action-button">
                                                <button onClick={()=>changeStatus(application._id,falsy)} className="btn">cancel</button>
                                                <button onClick={()=>setProfileDetail(true)} className="btn">contact</button>
                                            </div>
                                        </div>
                                        <SlidePopup title ="More Profile Details" openPopup={profileDetail} setOpenPopup={setProfileDetail}>
                                            <ProfessionalDetail id={application.userid}/>
                                        </SlidePopup>
                                        <ReviewPopup title="Review Professional's work" openPopup = {reviewPopup} setOpenPopup = {setReviewPopup}>
                                            <Review id={application.userid} workid = {id} />
                                        </ReviewPopup>
                                    </div> 
                                )
                            })
                        )
                    }
                    <div className="review-container">
                        <h4>Your Reviews</h4>
                        {
                        reviews.length == 0 ?(
                            <div className="review-container">
                                <p>No Reviews to Show.</p>
                            </div>

                        ):(
                            reviews.map((review)=>{
                                return(
                                <div className="review-detail-container">
                                    <div className="reviewer-detail-container">
                                        {
                                            review.profile == "noImage.jpg" ? (
                                                <img src="https://res.cloudinary.com/rojgar-com/image/upload/v1629620757/user_copllo.png" />
                                            ):(
                                                <img src={review.profile} />
                                            )
                                        }
                                        <div className="reviewer-rating">
                                            <p>{review.username}</p>
                                            <StarRatings 
                                                rating={review.rating}
                                                starDimension="15px"
                                                starSpacing="2px"
                                                starRatedColor="purple"
                                                className="star-rating-reviewer"
                                            />
                                        </div>
                                       
                                    </div>
                                    <div className="review-view-container">
                                        <p>
                                            {review.review}
                                        </p>
                                        <div className="review-view-action">
                                            <button className="btn" onClick={()=>setEditReviewPopup(true)}>Edit</button>
                                            <button className="btn" onClick={()=>deteteReview(review._id)}>Delete</button>
                                        </div>
                                    </div>
                                    <EditReviewPopup title ="Edit Review" openPopup={editreviewPopup} setOpenPopup={setEditReviewPopup}>
                                        <EditReview id={review._id} reviews={review.review} rating={review.rating} workid={id}/>
                                    </EditReviewPopup>
                                </div>
                                )
                            })
                        )
                    }
                    </div>
                </div>
            </div>
            <div className="applicaiton-detail-container">
                <h4 className="applicaiton-details-container-title"> New Applications</h4>
                {
                    application.length == 0 ? (
                        <div className="application-detail">
                            <p style={{margin:"auto"}}>No application to display.</p>
                        </div>
                    ) : (
                        application.map((application)=>{
                            const status = application.status;
                            return(
                                status == "ongoing" &&
                                <div className="application-detail">
                                    <div  onClick={()=>setProfileDetail(true)} className="applicant-profile-second">
                                        <img src={application.profile} />
                                        <div className="applicant-profile-detail">
                                            <h4>{application.username}</h4>
                                            <p>{application.profession}</p>
                                            <p>{application.address}</p>
                                        </div>
                                    </div>
                                    <div className="application-info">
                                        <h4>My Application</h4>
                                        <hr></hr>
                                        <p>{application.application}</p>
                                        <div className="application-action-button">
                                            {
                                                workstatus == "ongoing" ?(
                                                    <div>
                                                        <button onClick={()=>changeStatus(application._id,falsy)} className="btn">cancel</button>
                                                        <button onClick={()=>changeStatus(application._id,truth)} className="btn">Hire</button>
                                                    </div>
                                                ):(
                                                    <div>
                                                        <button onClick={()=>changeStatus(application._id,falsy)} className="btn">cancel</button>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <SlidePopup title ="More Profile Details" openPopup={profileDetail} setOpenPopup={setProfileDetail}>
                                        <ProfessionalDetail id={application.userid}/>
                                    </SlidePopup>
                                </div> 
                            )
                        })
                    )
                }
                </div>
        </div>
    )
}

export default Application
