import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { ScreeningInfo_screening as ScreeningInfoScreening } from './__generated__/ScreeningInfo_screening.graphql';
import graphql from 'babel-plugin-relay/macro';

interface Props {
  screening: ScreeningInfoScreening;
}

export const foo = (x: any) => x.toString();

class ScreeningInfo extends React.Component<Props> {
  render() {
    return <div>{this.props.screening.name}</div>;
  }
}

export default createFragmentContainer(
  ScreeningInfo,
  graphql`
    fragment ScreeningInfo_screening on Screening {
      name
      title
    }
  `,
);

export const _testOnly = {
  ScreeningInfo,
};
