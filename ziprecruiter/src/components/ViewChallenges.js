import React from 'react';
import { Link } from 'react-router';
import '../styles/ViewChallenges.css';

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {


    return (
      <div className="card" style={{"margin":"25px"}}>
      <div className="challenge">
        <h5>Unique Binary Search Trees</h5>
        <div className="side-scroll">
          <div className="card item">
            <img src="https://raw.githubusercontent.com/cazinge/ziprecruiter-hackathon/master/ziprecruiter/src/img/img1.png" alt="" width="250px" height="125px"  />
          </div>
          <div className="card item">
            <img src="https://raw.githubusercontent.com/cazinge/ziprecruiter-hackathon/master/ziprecruiter/src/img/img2.png" alt="" width="250px" height="125px"  />
          </div>
          <div className="card item">
            <img src="https://raw.githubusercontent.com/cazinge/ziprecruiter-hackathon/master/ziprecruiter/src/img/img3.png" alt="" width="250px" height="125px"  />
          </div>
          <div className="card item">
            <img src="https://raw.githubusercontent.com/cazinge/ziprecruiter-hackathon/master/ziprecruiter/src/img/img4.png" alt="" width="250px" height="125px"  />
          </div>
          <div className="card item">
            <img src="https://raw.githubusercontent.com/cazinge/ziprecruiter-hackathon/master/ziprecruiter/src/img/img5.png" alt="" width="250px" height="125px"  />
          </div>
          <div className="card item">
            <img src="https://raw.githubusercontent.com/cazinge/ziprecruiter-hackathon/master/ziprecruiter/src/img/img6.png" alt="" width="250px" height="125px"  />
          </div>
        </div>
        </div>
        <div className="challenge">
        <h5>Design a Database Schema</h5>
        <div className="side-scroll">
          <div className="card item">
            <img src="https://hivdb.stanford.edu/images/schema.gif" alt="" width="250px" height="125px"  />
          </div>
          <div className="card item">
            <img src="https://cancer.jpl.nasa.gov/documents/applications/biomarker-database/images/BMDB%20Database%20Schema%20%28obsolete%29.png/image_preview" alt="" width="250px" height="125px"  />
          </div>
          <div className="card item">
            <img src="http://www.databaseanswers.org/data_models/clients_and_fees/images/clients_and_fees_dezign.gif" alt="" width="250px" height="125px"  />
          </div>
          <div className="card item">
            <img src="https://support.smartbear.com/support/media/images/support/kb/data/2011/1/31/info-database-schema.jpg" alt="" width="250px" height="125px"  />
          </div>
          <div className="card item">
            <img src="http://www.databaseanswers.org/tutorial4_db_schema/images/amazon_customers.gif" alt="" width="250px" height="125px"  />
          </div>
          <div className="card item">
            <img src="https://mapr.com/blog/evolution-database-schemas-using-sql-nosql/assets/blogimages/USDA_NNDB_SR27_Standard.png" alt="" width="250px" height="125px"  />
          </div>
        </div>
        </div>
        <div className="challenge">
          <Link to='/newchallenge' className="waves-effect waves-light btn-large new-challenge">Create new Challenge</Link>

        </div>
      </div>
    );
  }
}
