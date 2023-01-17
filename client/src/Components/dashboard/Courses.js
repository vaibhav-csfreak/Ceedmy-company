import React from 'react';
import "./Courses.css";
function Courses() {
  return (
  	<>
    <div className='courses mt-3'>
    
   <main> 
     <div className="tabarea">
            <div className="tab-content active" id="online">
                <div className="loader"><span></span></div>
                <ul className="box-list">
                    <li>
                        <div className="round-box">
                            <small>Online Course</small>
                            <hr />
                         
                            <h2>Ethics (GS Paper-IV)</h2>
                            <p className="sub-title"><strong>Mode:</strong> Online</p>
                            <div className="category">
                                <span ><i className="fa fa-inr" aria-hidden="true"></i> 25000</span>
                                <a href="" className="readmore" target="_blank" data-title="Ethics (GS Paper-IV)">View More &raquo;</a>
                            </div>
                        </div>
                 
                    </li>
                    <li>
                        <div className="round-box">
                            <small>Online Course</small>
                            <hr />
                            <h2>GS Foundation Live Online Course</h2>
                            <p className="sub-title"><strong>Mode:</strong> Online</p>
                            <div className="category">
                                <span ><i className="fa fa-inr" aria-hidden="true"></i> 90000</span>
                                <a href="" className="readmore" target="_blank" data-title="GS Foundation Live Online Course">View More &raquo;</a>
                            </div>
                        </div>
                     
                    </li>
                    <li>
                        <div className="round-box">
                            <small>Current Affairs Crash Course</small>
                            <hr />
                            <h2>Current Affairs Crash Course - Prelims 2021</h2>
                            <p className="sub-title"><strong>Mode:</strong> Online</p>
                            <div className="category">
                                <span ><i className="fa fa-inr" aria-hidden="true"></i> 5000</span>
                                <a href="" className="readmore" target="_blank" data-title="Current Affairs Crash Course - Prelims 2021">View More &raquo;</a>
                            </div>
                        </div>
                       
                    </li>
                    <li>
                        <div className="round-box">
                            <small>IAS GS Online Course</small>
                            <hr />
                            <h2>IAS General Studies: Prelims and Mains Foundation Batch</h2>
                            <p className="sub-title"><strong>Mode:</strong> Pen drive Format</p>
                            <div className="category">
                                <span ><i className="fa fa-inr" aria-hidden="true"></i> 90000</span>
                                <a href="" className="readmore" target="_blank" data-title="IAS General Studies: Prelims and Mains Foundation Batch">View More &raquo;</a>
                            </div>
                        </div>
                    
                    </li>
                    <li>
                        <div className="round-box">
                            <small>IAS Prelims 2021</small>
                            <hr />
                            <h2>IAS Prelims: General Studies</h2>
                            <p className="sub-title"><strong>Mode:</strong> Online (Android-based devices)</p>
                            <div className="category">
                                <span ><i className="fa fa-inr" aria-hidden="true"></i> 36000</span>
                                <a href="" className="readmore" target="_blank" data-title="IAS Prelims: General Studies">View More &raquo;</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </main>

    </div>
    </>
  );
}

export default  Courses;