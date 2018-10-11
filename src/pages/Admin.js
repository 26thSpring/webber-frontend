import React, { Component } from 'react';
import './Admin.scss';
import { Link } from 'react-router-dom';
import { PageHeader } from 'components/PageHeader';
import { IconContext } from 'react-icons';
import { FaListUl, FaPaintBrush } from 'react-icons/fa';
import { MdInsertChart } from 'react-icons/md';

class Admin extends Component {
   componentwillUpdate() {
      window.scrollTo(0, 0);
   }
   render() {
      return (
         <div className="AdminTemplate">
            <PageHeader name="Administrator" />
            <div className="AdminSection">
               <div className="Admin_title">managing page</div>
               <div className="Admin_body">
                  <div className="Admin_manageUser">
                     <Link to="/ManageUser" onClick={this.componentwillUpdate}>
                        <IconContext.Provider
                           value={{ size: '80', color: 'red' }}
                        >
                           <FaListUl />
                        </IconContext.Provider>
                     </Link>
                  </div>
                  <div className="Admin_manageBoard">
                     <Link to="/ManageBoard" onClick={this.componentwillUpdate}>
                        <IconContext.Provider
                           value={{ size: '80', color: 'red' }}
                        >
                           <FaPaintBrush />
                        </IconContext.Provider>
                     </Link>
                  </div>
                  <div className="Admin_analytics">
                     <Link to="/Analytics" onClick={this.componentwillUpdate}>
                        <IconContext.Provider
                           value={{ size: '80', color: 'red' }}
                        >
                           <MdInsertChart />
                        </IconContext.Provider>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Admin;
