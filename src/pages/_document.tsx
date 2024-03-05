import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="https://stage-admin-editor.bound360.com/editor-sdk/bound-360.min.js"
            async
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
