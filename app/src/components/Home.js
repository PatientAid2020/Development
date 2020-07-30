import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import PrivacyPolicy from './PrivacyPolicy';
import Form from './Form';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { acceptedPolicy: false, submittedForm: false, uuid: null };

    this.onPolicyAccept = this.onPolicyAccept.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onPolicyAccept() {
    this.setState({ acceptedPolicy: true, uuid: uuidv4() });
  }

  onFormSubmit() {
    console.log("submitted");
    this.setState({ submittedForm: true })
  }

  render() {
    if (!this.state.acceptedPolicy) {
      return(<PrivacyPolicy providerId={this.props.providerId} onAccept={this.onPolicyAccept}/>);
    } else if (!this.state.submittedForm) {
      return(<Form providerId={this.props.providerId} uuid={this.state.uuid} onSubmit={this.onFormSubmit}/>)
    } else {
      return(<h1>Form submitted.</h1>)
      //TODO: add confirmation info, etc
    }
  }
}