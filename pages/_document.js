import Document, { Html, Head, Main, NextScript } from "next/document";
class myDocument extends Document {
  render() {
    return (
      <Html lang="fa" dir="rtl">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default myDocument;
