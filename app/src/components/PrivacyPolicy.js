import React from 'react';
import { Box, Button, Bar, Checkbox, GU } from '@aragon/ui';
import styled from 'styled-components';
import APIUtils from '../api/APIUtils';
import { Title4, Body2 } from './Text';

const CenteredBox = styled(Box)`
  text-align:center;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${2 * GU}px;
`;

const ScrollBox = styled(Box)`
  height: 50vh;
  overflow: scroll;
`;

class PrivacyPolicy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {checked:false}
    this.policy = APIUtils.getPolicy(props.providerId);
  }

  render() {
    return(
      <>
        <CenteredBox>
          <Title4>Welcome to PatientAid! Before getting started, we request that all users accept our data privacy policy.</Title4>
        </CenteredBox>
        <ScrollBox>
          <Body2>{this.policy}</Body2>
        </ScrollBox>
        <CenteredBox>
          <CheckboxWrapper>
            <Checkbox checked={this.state.checked} onChange={(checked) => this.setState({ checked })}/>
            I agree to the PatientAid data privacy policy
          </CheckboxWrapper>
          <Button mode="positive" onClick={() => this.props.onAccept()} disabled={!this.state.checked}>Get started</Button>
        </CenteredBox>
      </>
    );
  }
}

export default PrivacyPolicy;