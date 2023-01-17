import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Courses from './Courses'
import Navbar from '../components/Navbar';
import Reports from './Reports'
import Support from './Support'
import Login from '../../pages/Login/Login'
import { Route, Switch } from "react-router-dom";
class Dashboard extends Component {
  onLogoutClick = () => {
    
    this.props.logoutUser();
    return(
      <Login/>
    )
  };
  render() {
    const { user } = this.props.auth;
    return (
      // <div style={{ height: "75vh" }} className="container valign-wrapper mt-5">
      //   <div className="row">
      //     <div className="col s12 center-align">
      //       <h4>
      //         <b>Hey there,</b> {user.name.split(" ")[0]}
      //         <p className="flow-text grey-text text-darken-1">
      //           You are logged into a full-stack{" "}
      //           <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
      //         </p>
      //       </h4>
      //       <button
      //         style={{
      //           width: "150px",
      //           borderRadius: "3px",
      //           letterSpacing: "1.5px",
      //           marginTop: "1rem",
      //         }}
      //         onClick={this.onLogoutClick}
      //         className="btn btn-large waves-effect waves-light hoverable blue accent-3"
      //       >
      //         Logout
      //       </button>
      //     </div>
      //   </div>
      // </div>
      <>
      <Navbar name={user.name}/>
     
          <Switch>
            <Route exact path="/dashboard/" component={Courses} />
            <Route exact path ="/dashboard/reports" component={Reports} />
            <Route exact path ="/dashboard/support" component={Support} />
            <Route exact path ="/dashboard/logout" component={this.onLogoutClick} />
            
          </Switch>
        
      </>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
