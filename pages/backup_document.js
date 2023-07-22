
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="flex justify-center content-center bg-gray-100 min-h-screen">
          <div className="py-10 px-10 w-4/5 mt-10 mb-10">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
