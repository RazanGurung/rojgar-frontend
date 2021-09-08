import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-sliding-pane/dist/react-sliding-pane.css";
import 'react-toastify/dist/ReactToastify.css';
import Registration from './component/Registration/Registration';
import Login from './component/Registration/Login';
import { BrowserRouter as Router, Redirect, Route,Switch } from "react-router-dom";
import  Navbar from './component/Header/Navbar';
import Footer from './component/Footer/Footer';
import Dashnav from './component/Dashboard/Dashnav';
import Account from './component/Dashboard/pages/Account';
import User from './component/Dashboard/pages/User';
import Myjob from './component/Dashboard/pages/Myjob';
import ViewProfessional from './component/Find/ViewProfessional';
import Home from './component/Home/Home';
import ProfessionalSearch from './component/Search/ProfessionalSearch';
import WorkSearch from './component/Search/WorkSearch';
import ViewWork from './component/Find/ViewWork';
import Application from './component/Dashboard/pages/Application';
import JobRequest from './component/Apply_Hire/JobRequest';
import VerificationInfo from './component/Verification/VerificationInfo';
import EmailVerification from './component/Verification/EmailVerification';
import ViewInvites from './component/Apply_Hire/ViewInvites';
import ForgetPassword from './component/Verification/ForgetPassword';
import ForgetPasswordUpdate from './component/Verification/ForgetPasswordUpdate';
import ForgetPasswordInformation from './component/Verification/ForgetPasswordInformation';
import Bookmark from './component/Bookmark/Bookmark';
import ProfessionalProgress from './component/Dashboard/pages/ProfessionalProgress';
import UserProgress from './component/Dashboard/pages/UserProgress';
import AboutUs from './component/AboutUs/AboutUs';
import AdminLogin from './component/Admin/AdminLogin';
import AdminDashboard from './component/Admin/AdminDashboard';
import AdminNav from './component/Admin/AdminNav';
import SideNav from './component/Admin/SideNav';
import ViewUser from './component/Admin/ViewUser';
import ViewProfessionalAdmin from './component/Admin/ViewProfessional';
import ViewPost from './component/Admin/ViewPost';
import Contact from './component/AboutUs/Contact';
import AdminContact from './component/Admin/AdminContact';

function App() {
  var logedIn = false;
  if(localStorage.getItem("token")){
    logedIn=true;
  }else{
    logedIn=false;
  }
  const user = localStorage.getItem("usertype");
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/contact">
            {
              logedIn == true ? <Dashnav /> : <Navbar /> 
            }
            <Contact />
            <Footer />
          </Route>
          <Route path="/admin/dashboard">
              {
                logedIn == true? (
                  <div>
                      {
                        user == "admin" ?(
                          <div>
                            <AdminNav />
                            <div className="dashboard__page">
                              <SideNav />
                              <AdminDashboard />
                            </div>
                          </div>
                        ):(
                          <Redirect to="/" />
                        )
                      }
                  </div>
                ):(
                  <Redirect to="/" />
                )
              }
          </Route>
          <Route path="/admin/view/contact">
              {
                logedIn == true? (
                  <div>
                      {
                        user == "admin" ?(
                          <div>
                            <AdminNav />
                            <div className="dashboard__page">
                              <SideNav />
                              <AdminContact />
                            </div>
                          </div>
                        ):(
                          <Redirect to="/" />
                        )
                      }
                  </div>
                ):(
                  <Redirect to="/" />
                )
              }
          </Route>
          <Route path="/admin/view/user">
              {
                logedIn == true? (
                  <div>
                      {
                        user == "admin" ?(
                          <div>
                            <AdminNav />
                            <div className="dashboard__page">
                              <SideNav />
                              <ViewUser />
                            </div>
                          </div>
                        ):(
                          <Redirect to="/" />
                        )
                      }
                  </div>
                ):(
                  <Redirect to="/login" />
                )
              }
          </Route>
          <Route path="/admin/view/professional">
              {
                logedIn == true? (
                  <div>
                      {
                        user == "admin" ?(
                          <div>
                            <AdminNav />
                            <div className="dashboard__page">
                              <SideNav />
                              <ViewProfessionalAdmin />
                            </div>
                          </div>
                        ):(
                          <Redirect to="/" />
                        )
                      }
                  </div>
                ):(
                  <Redirect to="/" />
                )
              }
          </Route>
          <Route path="/admin/view/post">
              {
                logedIn == true? (
                  <div>
                      {
                        user == "admin" ?(
                          <div>
                            <AdminNav />
                            <div className="dashboard__page">
                              <SideNav />
                              <ViewPost />
                            </div>
                          </div>
                        ):(
                          <Redirect to="/" />
                        )
                      }
                  </div>
                ):(
                  <Redirect to="/" />
                )
              }
          </Route>
          <Route path="/about/us">
            <Navbar />
            <AboutUs />
            <Footer />
          </Route>
          <Route path="/forget/information">
            <ForgetPasswordInformation />
          </Route>
          <Route path="/forget/password/update/:token">
            <Navbar />
            <ForgetPasswordUpdate />
            <Footer />
          </Route>
          <Route path="/forget/password">
            <ForgetPassword />
          </Route>
          <Route path="/verify-message">
            <VerificationInfo />
          </Route>
          <Route path="/verify/user/:token">
            <EmailVerification />
          </Route>
          <Route path="/search-work/:search">
            <Navbar />
            <WorkSearch />
            <Footer />
          </Route>
          <Route path="/search-job/:search">
            <Dashnav />
            <WorkSearch />
            <Footer />
          </Route>
          <Route path="/search-worker/:search">
            <Navbar />
            <ProfessionalSearch />
            <Footer />
          </Route>
          <Route path="/search-professional/:search">
            <Dashnav />
            <ProfessionalSearch />
            <Footer />
          </Route>

          <Route path="/user/progress">
              {
                logedIn == true? (
                  <div>
                      {
                        user == "user" ?(
                          <div>
                            <Dashnav />
                            <UserProgress />
                            <Footer />
                          </div>
                        ):(
                          <Redirect to="/login" />
                        )
                      }
                  </div>
                ):(
                  <Redirect to="/login" />
                )
              } 
          </Route>
          <Route path="/professional/progress">
              {
                logedIn == true? (
                  <div>
                      {
                        user == "professional" ?(
                          <div>
                            <Dashnav />
                            <ProfessionalProgress />
                            <Footer />
                          </div>
                        ):(
                          <Redirect to="/login" />
                        )
                      }
                  </div>
                ):(
                  <Redirect to="/login" />
                )
              } 
          </Route>
          <Route path="/bookmark">
              {
                logedIn == true? (
                  <div>
                      {
                        user == "professional" ?(
                          <div>
                            <Dashnav />
                            <Bookmark />
                            <Footer />
                          </div>
                        ):(
                          <Redirect to="/login" />
                        )
                      }
                  </div>
                ):(
                  <Redirect to="/login" />
                )
              } 
          </Route>
          <Route path="/view/invites">
              {
                logedIn == true? (
                  <div>
                      {
                        user == "professional" ?(
                          <div>
                            <Dashnav />
                            <ViewInvites />
                            <Footer />
                          </div>
                        ):(
                          <Redirect to="/login" />
                        )
                      }
                  </div>
                ):(
                  <Redirect to="/login" />
                )
              } 
          </Route>
          

          <Route path="/job/request/:id">
              {
                logedIn == true? (
                  <div>
                      {
                        user == "user" ?(
                          <div>
                            <Dashnav />
                            <JobRequest />
                            <Footer />
                          </div>
                        ):(
                          <Redirect to="/login" />
                        )
                      }
                  </div>
                ):(
                  <Redirect to="/login" />
                )
              } 
          </Route>
          <Route path="/find-work">
              {
                logedIn == false? (
                  <div>
                    <Navbar />
                    <ViewWork />
                    <Footer />
                  </div>
                ):(
                  <Redirect to="/" />
                )
              }
          </Route>
          <Route path="/find-worker">
            {
              logedIn == false? (
                <div>
                  <Navbar />
                  <ViewProfessional />
                  <Footer />
                </div>
              ):(
                <Redirect to="/" />
              )
            }
          </Route>
         
          <Route path="/job-post">
              {
                logedIn == true? (
                  <div>
                      {
                        user == "user" ?(
                          <div>
                            <Dashnav />
                            <Myjob />
                            <Footer />
                          </div>
                        ):(
                          <Redirect to="/login" />
                        )
                      }
                  </div>
                ):(
                  <Redirect to="/login" />
                )
              }
          </Route>
          <Route path="/application/:id">
              {
                logedIn == true? (
                  <div>
                      {
                        user == "user" ?(
                          <div>
                            <Dashnav />
                            <Application />
                            <Footer />
                          </div>
                        ):(
                          <Redirect to="/login" />
                        )
                      }
                  </div>
                ):(
                  <Redirect to="/login" />
                )
              }
          </Route>

          <Route path="/account">
              {
                logedIn == true? (
                  <div>
                      {
                        user == "professional" ?(
                          <div>
                            <Dashnav />
                            <Account />
                            <Footer />
                          </div>
                        ):(
                          <Redirect to="/login" />
                        )
                      }
                  </div>
                ):(
                  <Redirect to="/login" />
                )
              }
          </Route>
          <Route path="/user-account">
              {
                logedIn == true? (
                  <div>
                      {
                        user == "user" ?(
                          <div>
                            <Dashnav />
                            <User />
                            <Footer />
                          </div>
                        ):(
                          <Redirect to="/login" />
                        )
                      }
                  </div>
                ):(
                  <Redirect to="/login" />
                )
              }
          </Route>

          <Route path="/admin">
            {
              logedIn == false? (
                <div>
                  <AdminLogin />
                </div>
              ):(
                <Redirect to="/" />
              )
            }
          </Route>
          <Route path="/signup">
            {
              logedIn == false? (
                <div>
                  <Navbar />
                  <Registration />
                  <Footer />
                </div>
              ):(
                <Redirect to="/" />
              )
            }
          </Route>
          <Route path="/login">
            {
              logedIn == false? (
                <div>
                  <Navbar />
                  <Login />
                  <Footer />
                </div>
              ):(
                <Redirect to="/" />
              )
            }
          </Route>


          <Route path="/find-job">
              {
                logedIn == true? (
                  <div>
                      {
                        user == "professional" ?(
                          <div>
                            <Dashnav />
                            <ViewWork />
                            <Footer />
                          </div>
                        ):(
                          <Redirect to="/login" />
                        )
                      }
                  </div>
                ):(
                  <Redirect to="/login" />
                )
              }
          </Route>
          <Route path="/home">
              {
                logedIn == false? (
                  <div>
                    <Navbar />
                    <Home />
                    <Footer />
                  </div>
                ):(
                  <Redirect to="/" />
                )
              }
          </Route>
          
          <Route path="/find-professional">
              {
                logedIn == true? (
                  <div>
                      {
                        user == "user" ?(
                          <div>
                            <Dashnav />
                            <ViewProfessional />
                            <Footer />
                          </div>
                        ):(
                          <Redirect to="/" />
                        )
                      }
                  </div>
                ):(
                  <Redirect to="/" />
                )
              }
          </Route>
          <Route path="/">
            {
              logedIn === true ?(
                <div>
                  {
                    user === "user" ? (
                      <Redirect to="/find-professional" />
                    ) : user == "admin"?(
                      <Redirect to="/admin/dashboard" />
                    ) : (
                      <Redirect to="/find-job" />
                    )
                  }
                </div>
              ):(
                <Redirect to="/home" />
              )
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
