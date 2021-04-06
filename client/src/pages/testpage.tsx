import Head from 'next/head';

// test-playground:

export default function Testpage() {
  return (
    <div className="bg-white">
      <Head>
        <title>TestPage</title>
      </Head>
      {/* Flex Container Example */}
      <div id="container" className="flex flex-col">
        <div id="header" className="flex p-4 bg-gray-400">
          Header
        </div>

        <div id="main" className="flex flex-col flex-grow md:flex-row">
          <div className="flex p-4 bg-gray-300">Sidebar</div>
          <div className="flex-grow p-4 bg-gray-100">Content</div>
        </div>

        <div id="footer" className="p-4 bg-gray-500">
          Footer
        </div>
      </div>
    </div>
  );
}
