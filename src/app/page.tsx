import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="text-center max-w-4xl mx-auto space-y-8">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Design Your Dream Room
          </h1>
          <p className="text-xl md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Create beautiful room moodboards and layouts with our intuitive design tool. Drag, drop,
            and arrange furniture to visualize your perfect space.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link
            href="/boards/new"
            className="bg-neutral-600 text-white px-8 py-4 text-lg font-semibold rounded-xl hover:bg-neutral-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Designing
          </Link>

          <Link
            href="/boards"
            className="bg-white text-gray-700 px-8 py-4 text-lg font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 border-2 border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg"
          >
            View My Boards
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-neutral-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Design</h3>
            <p className="text-gray-600">
              Drag and drop furniture to create your perfect room layout
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-neutral-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Save & Share</h3>
            <p className="text-gray-600">Save your designs and share them with others</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-neutral-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Tools</h3>
            <p className="text-gray-600">Professional tools for precise room planning</p>
          </div>
        </div>
      </div>
    </main>
  );
}
