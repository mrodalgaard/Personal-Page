import mailGreyImg from 'assets/img/mail-grey.png';
import mailImg from 'assets/img/mail.png';
import React from 'react';
import styled from 'styled-components';
import analytics, { LogEvent } from 'util/analytics';

const Link = styled.a`
  ${({ color, theme }) =>
    color === theme.primary
      ? `background-image: url(${mailGreyImg})`
      : `background-image: url(${mailImg})`};
  background-size: 64px 64px;
  width: 64px;
  height: 64px;
  float: right;

  &:hover {
    background-image: url(${mailImg});
  }
`;

interface IProps {
  color?: string;
  href: string;
}

const MailLink = ({ color, href }: IProps) => {
  const onClick = () => {
    analytics.logEvent(LogEvent.MailClick);
  };

  return <Link color={color} href={href} onClick={onClick} aria-label="mail" />;
};

export default MailLink;