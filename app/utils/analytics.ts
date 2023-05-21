import { logEvent as firebaseLogEvent, getAnalytics, isSupported } from 'firebase/analytics';
import { NextWebVitalsMetric } from 'next/app';
import firebaseApp from './firebase';

export enum AnalyticsEvent {
  ColorClick = 'color_click',
  QuoteClick = 'quote_click',
  MailClick = 'mail_click',

  WhoAmILink = 'who_am_i_link',
  LinkedInLink = 'linkedin_link',
  LinkedInIconLink = 'linkedin_icon_link',
  TwitterLink = 'twitter_link',
  TwitterIconLink = 'twitter_icon_link',
  GithubLink = 'github_link',
  GithubIconLink = 'github_icon_link',
  WorkLink = 'work_link',

  WebVitals = 'web_vitals',
}

const logEventToFirebase = async (event: AnalyticsEvent, parameters?: { [key: string]: any }) => {
  if (await isSupported()) {
    firebaseLogEvent(getAnalytics(firebaseApp), event, parameters);
  }
};

const logEvent = async (event: AnalyticsEvent, parameters?: { [key: string]: any }) => {
  logEventToFirebase(event, parameters);
};

const logWebVitals = async ({ id, name, value }: NextWebVitalsMetric) => {
  logEventToFirebase(AnalyticsEvent.WebVitals, {
    id,
    name,
    value: Math.round(name === 'CLS' ? value * 1000 : value),
  });
};

export { logEvent, logWebVitals };