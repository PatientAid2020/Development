import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import PrivacyPolicy from './PrivacyPolicy';
import Form from './Form';

const PROVIDER_ID = 1;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { acceptedPolicy: false, uuid: null };

    this.onPolicyAccept = this.onPolicyAccept.bind(this);
  }

  onPolicyAccept() {
    this.setState({ acceptedPolicy: true, uuid: uuidv4() });
  }

  render() {
    if (this.state.acceptedPolicy) {
      return(<Form providerId={PROVIDER_ID} uuid={this.state.uuid}/>)
    } else {
      return(<PrivacyPolicy providerId={PROVIDER_ID} onAccept={this.onPolicyAccept}/>);
    }
  }
}