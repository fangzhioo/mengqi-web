import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='zh' className='dark'>
        <Head>
          <link rel='preload' href='/fonts/inter-var-latin.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
          <meta name='theme-color' content='#ffffff' />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                try {
                  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#0B1120')
                  } else {
                    document.documentElement.classList.remove('dark')
                    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#ffffff')
                  }
                } catch (_) {}
              `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              try {
                var colors = [
                  'rose','pink','fuchsia','purple','violet',
                  'indigo','blue','sky','cyan', 'teal',
                  'emerald', 'green','lime', 'yellow',
                  'amber', 'orange','red',  'slate','gray',
                  'zinc','neutral','stone',
                ];
                var today = new Date();
                var currentYear = today.getFullYear().toString();
                var hasTimestamp = today - new Date(currentYear);
                var hasDays = Math.ceil(hasTimestamp / 86400000);
                var colorClass = colors[hasDays % colors.length];
                if (localStorage.color) {
                  document.documentElement.classList.add(localStorage.color)
                } else {
                  document.documentElement.classList.add(colorClass)
                }
              } catch (_) {}
            `,
            }}
          />
        </Head>
        <body className='bg-white text-slate-700 dark:bg-slate-900 dark:text-[#e2e8f0]'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
