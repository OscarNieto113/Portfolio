import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body className="bg-gradient-to-b from-gray-900 to-gray-600">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
