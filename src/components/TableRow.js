import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DocumentService from '../services/DocumentService';
import { withRouter } from 'react-router';
class TableRow extends Component {

  constructor(props) {
    super(props);
  }

  deleteDocument= () =>{
    DocumentService.deleteApi('delete-document?id='+this.props.obj._id)
    .then(json => {
    if(json.data.statusCode===200){
      alert('Record deleted successfully!!');
      this.props.history.push('/add-document')
    }
    else{
      alert('something went wrong!!');
    this.props.history.push('/index')
    }
    }).catch((error)=>{
    console.log("error-----------",error)
    })
  }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.document_title}
          </td>
          <td>
            {this.props.obj.desc}
          </td>
          <td>
            {this.props.obj.publisher}
          </td>
          <td>
            {this.props.obj.item}
          </td>
          <td>
          <Link to={"/edit-document/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
        </td>
          <td>
            <form >
              <button type="button" onClick={this.deleteDocument} className="btn btn-danger">Delete</button>
            </form>
          </td>
        </tr>
    );
  }
}

export default withRouter(TableRow);
