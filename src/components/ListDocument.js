import React, { Component } from 'react';
import DocumentService from '../services/DocumentService';
import axios from 'axios';


import { Link } from 'react-router-dom';

let marginTop = {
  marginTop: '50px'
};

let centerAlign = {
  marginLeft: "0%",
  marginTop: '15%',
  width: "500px",
  height: "110px"

}

class ListDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      searchName:''
      //       items: [
      //         {
      //           "id":"1",
      //           "name": "reshma",
      //             "email": "reshma@gmail.com",
      //               "mobileNo": 7878473339,
      //                 "address": "baner,pune",
      //                   "idProof": "464585VPAP",
      //                     "contactPersonName": "gopish",
      //                       "contactPersonEmail": "gopish@gmail.com",
      //                         "reasonForVisit": "joining",
      //                           "contactPersonMobileNo": 9999999999,
      //                             "visitorType": "student"
      //         },

      // {
      //   "id":"2",
      //   "name": "reshma",
      //     "email": "reshma@gmail.com",
      //       "mobileNo": 7878473339,
      //         "address": "baner,pune",
      //           "idProof": "464585VPAP",
      //             "contactPersonName": "gopish",
      //               "contactPersonEmail": "gopish@gmail.com",
      //                 "reasonForVisit": "joining",
      //                   "contactPersonMobileNo": 9999999999,
      //                     "visitorType": "student"
      // },
      // {
      //   "id":"3",
      //   "name": "reshma",
      //     "email": "reshma@gmail.com",
      //       "mobileNo": 7878473339,
      //         "address": "baner,pune",
      //           "idProof": "464585VPAP",
      //             "contactPersonName": "gopish",
      //               "contactPersonEmail": "gopish@gmail.com",
      //                 "reasonForVisit": "joining",
      //                   "contactPersonMobileNo": 9999999999,
      //                     "visitorType": "student"
      // },
      // {
      //   "id":"4",
      //   "name": "reshma",
      //     "email": "reshma@gmail.com",
      //       "mobileNo": 7878473339,
      //         "address": "baner,pune",
      //           "idProof": "464585VPAP",
      //             "contactPersonName": "gopish",
      //               "contactPersonEmail": "gopish@gmail.com",
      //                 "reasonForVisit": "joining",
      //                   "contactPersonMobileNo": 9999999999,
      //                     "visitorType": "student"
      // }]
    };
    this.addDocumentService = new DocumentService();
  }

  componentDidMount() {
    DocumentService.getApi('visitorsList')
      .then(response => {
        this.setState({ items: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  printData = (item) => {
    axios.get('http://10.9.42.239:8083/api/printToken/' + item.id)
      .then(response => {
        const file = new Blob(
          [response.data],
          { type: 'application/pdf' });
        const fileURL = 'http://10.9.42.239:8083/api/printToken/' + item.id;
        window.open(fileURL);

      })
      .catch(function (error) {
        console.log(error);
      })
  }

  searchData = (e) => {  
    DocumentService.postApi('search',e.target.value)
    .then(response => {
      console.log(e.target.value);
      this.setState({ items: response.data });
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  handleEdit = (data) => {
    this.props.history.push('/edit-document/:id')
    //setData(data);
    // DocumentService.getApi('deleteVisitorById')
    // .then(response => {
    //   console.log(response);
    //  this.setState({ items: response.data });
    // })
    // .catch(function (error) {
    //   console.log(error);
    // })
  }

  render() {
    let dataCount = this.state.items.length;
    return (
      <div >
        <div className="row justify-content-md-center ">
          {dataCount ? <div className="container form-back" style={marginTop}> <h3 className="text-center ">Visitor List</h3><br></br> 
          {/* <input type="text" onClick={this.searchData()}> </input> */}

            <table className="table ">
              <thead className="font-bold">
                <tr>
                  <td>No</td>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Mobile Number</td>
                  <td>Id proof</td>
                  <td>Visitor Type</td>
                  <td>POC Name</td>
                  <td>POC Number</td>
                  <td></td>
                  <td></td>
                </tr>
              </thead>
              {this.state.items.map((item, index) => (
                <tbody> <tr>
                  <td>
                    <span>{index + 1}</span>
                  </td>
                  <td>
                    <span>{item.name}</span>
                  </td>
                  <td>
                    <span>{item.email}</span>
                  </td>
                  <td>
                    <span>{item.mobileNo}</span>
                  </td>
                  <td>
                    <span>{item.idProof}</span>
                  </td>
                  <td>
                    <span>{item.visitorType}</span>
                  </td>
                  <td>
                    <span>{item.contactPersonName}</span>
                  </td>
                  <td>
                    <span>{item.contactPersonMobileNo}</span>
                  </td>
                  <td>
                    <Link to={"/edit-document/" + item.id} className="btn btn-primary">Update</Link>
                    {/* <button className="btn btn-primary"  onClick={() => this.handleEdit(item)}>Update</button> */}
                  </td>
                  <td>
                    <button className="btn btn-primary" onClick={() => this.printData(item)}>Print</button>
                  </td>
                </tr>  </tbody>
              ))
              }
            </table>    </div> : (<div style={centerAlign} className=" form-back data-msg text-center">Data Not Found </div>)}
        </div>
      </div>
    );
  }
}

export default ListDocument;
