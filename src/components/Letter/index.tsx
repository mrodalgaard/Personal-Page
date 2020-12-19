import Age from 'components/Age';
import AppContext from 'components/App/AppContext';
import Link from 'components/Link';
import Quote from 'components/Quote';
import { IQuote } from 'components/Quote/useQuote';
import { Paper } from 'components/Shared/Paper';
import React, { useContext } from 'react';
import analytics, { LogEvent } from 'util/analytics';

interface IProps {
  initialQuote?: IQuote;
}

const Letter = ({ initialQuote }: IProps) => {
  const { color, toggleBackground, toggleColor } = useContext(AppContext);

  const onColorsClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    toggleBackground && toggleBackground();
    toggleColor && toggleColor();
    analytics.logEvent(LogEvent.ColorClick);
  };

  return (
    <Paper>
      <p>
        Dear{' '}
        <Link
          href="https://whatsmybrowser.org/"
          color={color}
          onClick={() => analytics.logEvent(LogEvent.WhoAmILink)}
        >
          Reader
        </Link>
        ,
      </p>
      <p>
        <Link
          href="https://facebook.com/mrodalgaard"
          color={color}
          onClick={() => analytics.logEvent(LogEvent.FacebookLink)}
        >
          Martin Rodalgaard
        </Link>{' '}
        is a <Age birthday="1986-08-22" updateInterval={100} /> year old
        engineer living in Aarhus, Denmark, with his wonderful girlfriend Rikke
        and children Gry and Thor.
      </p>
      <p>
        He is educated in{' '}
        <Link
          href="https://linkedin.com/in/mrodalgaard"
          color={color}
          onClick={() => analytics.logEvent(LogEvent.LinkedInLink)}
        >
          Electrical Engineering
        </Link>{' '}
        specialised in Embedded Systems and{' '}
        <Link
          href="https://github.com/mrodalgaard"
          color={color}
          onClick={() => analytics.logEvent(LogEvent.GithubLink)}
        >
          Programming
        </Link>
        . He currently works at{' '}
        <Link
          href="https://trifork.com"
          color={color}
          onClick={() => analytics.logEvent(LogEvent.WorkLink)}
        >
          Trifork A/S
        </Link>{' '}
        as a Software Pilot creating mobile and web apps for customers.
      </p>
      <p>
        Martin loves{' '}
        <Link href="#" onClick={onColorsClick} color={color}>
          colors
        </Link>
        , big city traveling, skiing, watching movie classics and reading
        biographies.
      </p>
      <p>
        The gear he <u>can</u> live without (but doesn&#39;t want to) includes
        his 16" MacBook Pro, a broken iPhone X, an old Canon 550D, a converted
        Giant racing bike and an Omega Seamaster on his wrist.
      </p>
      <Quote color={color} initialQuote={initialQuote} />
    </Paper>
  );
};

export default Letter;