import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'


export default class DefaultDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags } // return styles collected
  }

  render() {
    /**
    * Here we use _document.js to add a "lang" propery to the HTML object if
    * one is set on the page.
    **/
    return (
      <html lang={this.props.__NEXT_DATA__.props.lang || 'en'}>
        <Head>
          {this.props.styleTags}
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}