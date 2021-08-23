import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from './actions/contactAction';
import * as contactFav from'./actions/contactFav';

class App extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitFav=this.handleSubmitFav.bind(this);
     
    this.state = {
      name: '',
    }
  }

  handleChange(e){
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    let contact = {
      name: this.state.name
    }
    this.setState({
      name: ''
    });
    localStorage.setItem('user', this.state.name);
    this.props.createContact(contact);
  }

  handleSubmitFav(e){
    e.preventDefault();
    let fav = {
      name: this.state.name
    }
    this.setState({
      name: ''
    });
    this.props.createContactFav(fav);
  }

  handleEditClick(e,index) {
    const {content}=this.props;
    e.preventDefault();
    const newContent = prompt("Edit:", content);
    this.props.editContact(newContent,index);
    debugger;
  }

  listView(data, index){
    return (
      <div className="row">
        <div className="col-md-6">
          <li key={index} className="list-group-item clearfix">
            {data.name}
            {" "}
            <button onClick={(e) => this.deleteContact(e, index)} className="btn btn-danger">
            Remove
          </button> 
          {" "}
              <button
                type="button"
                onClick={(e) => this.handleEditClick(e, index)}
              >
                Edit
              </button>
            </li>

        </div>
       
    </div> 
    )
  }

  deleteContact(e, index){
    e.preventDefault();
    this.props.deleteContact(index);
  }

  render() {

    return(
      <div className="container">
        <h1> Contacts Application</h1>
        <hr />
        <div>
          <h3>Add Contact Form</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} className="form-control" value={this.state.name}/><br />
            <input type="submit" className="btn btn-success" value="ADD"/>
          </form>
          <hr />
        { <ul className="list-group">
          {this.props.contacts.map((contact, i) => this.listView(contact, i))}
        </ul> }
        <h3>Add Fav Contact Form</h3>
          <form onSubmit={this.handleSubmitFav}>
            <input type="text" onChange={this.handleChange} className="form-control" value={this.state.name}/><br />
            <input type="submit" className="btn btn-success" value="ADD"/>
          </form>
          <hr />
          { <ul className="list-group">
          {this.props.fav.map((fav, i) => this.listView(fav, i))}
        </ul> }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts,
    fav:state.fav
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    editContact: (contact,index)=> dispatch(contactAction.editContact(contact,index)),
    deleteContact: index =>dispatch(contactAction.deleteContact(index)),
    createContactFav: fav => dispatch(contactFav.createContactFav(fav)),

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);