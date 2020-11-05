import * as React from 'react';
import Timer from './count/CountDown';
import { ICountdownProps } from './ICountdownProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Countdown extends React.Component<ICountdownProps, {}> {
  public render(): React.ReactElement<ICountdownProps> {
    return (
      <Timer />
    );
  }
}
