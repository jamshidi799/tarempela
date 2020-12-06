import '../styles/styles.scss';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn: 'https://023212b91bdb4e9d9d63036532110418@o487507.ingest.sentry.io/5546352',
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
