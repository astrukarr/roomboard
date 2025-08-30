import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Zap,
  Move,
  Maximize2,
  RotateCcw,
  Trash2,
  Package,
  HelpCircle,
  Plus,
  Save,
  Folder,
  Lock,
  ChevronDown,
} from 'react-feather';

export const metadata: Metadata = {
  title: 'How to Use | RoomBoard',
  description: 'Quick guide to creating boards in RoomBoard.',
};

export default function Page() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How to Use RoomBoard
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A comprehensive guide to creating beautiful room moodboards and layouts with our
            intuitive design tool.
          </p>
        </header>

        {/* Quick Start Section */}
        <section className="mb-16">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Quick Start Guide</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-neutral-50 rounded-xl">
                <div className="w-16 h-16 bg-neutral-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Create New Board</h3>
                <p className="text-gray-600 text-sm">
                  Go to{' '}
                  <Link href="/boards/new" className="text-black-800 hover:underline font-medium">
                    New Board
                  </Link>{' '}
                  to start designing
                </p>
              </div>

              <div className="text-center p-6 bg-neutral-50 rounded-xl">
                <div className="w-16 h-16 bg-neutral-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Add Furniture</h3>
                <p className="text-gray-600 text-sm">
                  Drag items from the catalog onto the canvas (sofa, chair, table, etc.)
                </p>
              </div>

              <div className="text-center p-6 bg-neutral-50 rounded-xl">
                <div className="w-16 h-16 bg-neutral-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Save & Share</h3>
                <p className="text-gray-600 text-sm">
                  Arrange your layout and save your design or export as PNG
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Canvas Controls */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Move className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Canvas Controls</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Move className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Move</h3>
                  <p className="text-gray-600 text-sm">
                    Drag any item to reposition it on the canvas
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Maximize2 className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Resize</h3>
                  <p className="text-gray-600 text-sm">Use corner handles to adjust item size</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <RotateCcw className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Rotate</h3>
                  <p className="text-gray-600 text-sm">Use the rotate handle to turn items</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Trash2 className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Delete</h3>
                  <p className="text-gray-600 text-sm">
                    Select an item and press{' '}
                    <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Delete</kbd>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Catalog & Features */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Catalog & Features</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Furniture Catalog</h3>
                <p className="text-gray-600 text-sm">
                  Basic furniture items (sofa, table, chair, lamp) with realistic dimensions and
                  prices. Duplicate items to try different combinations.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">Color Matching</h3>
                <p className="text-gray-600 text-sm">
                  Upload room photos to extract dominant colors for perfect matching
                  <span className="text-gray-400"> (coming soon)</span>
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">Export Options</h3>
                <p className="text-gray-600 text-sm">
                  Save as PNG to share with clients or friends
                  <span className="text-gray-400"> (coming soon)</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Saving & Privacy */}
        <section className="mb-16">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Save className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Saving & Privacy</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <Save className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Local Storage</h3>
                <p className="text-gray-600 text-sm">All boards are stored in your browser</p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-xl">
                <Folder className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Easy Access</h3>
                <p className="text-gray-600 text-sm">
                  Visit{' '}
                  <Link href="/boards" className="text-green-600 hover:underline font-medium">
                    My Boards
                  </Link>{' '}
                  to open saved designs
                </p>
              </div>

              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <Lock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">100% Private</h3>
                <p className="text-gray-600 text-sm">
                  No account needed, data stays on your device
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tips & FAQ */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Design Tips */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center"></div>
              <h2 className="text-xl font-semibold text-gray-900">Design Tips</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-xs font-bold">1</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Start with large pieces (sofa, rug), then add accents (lamp, plants, art)
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs font-bold">2</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Try two versions: light & airy vs. warm & moody — decide by comparison
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-600 text-xs font-bold">3</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Keep item sizes proportional; use preset sizes to stay realistic
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              <details className="group">
                <summary className="cursor-pointer font-medium text-gray-900 hover:text-gray-700 transition-colors duration-200 flex items-center justify-between">
                  Where are my boards stored?
                  <ChevronDown className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <p className="mt-3 text-gray-600 text-sm bg-gray-50 p-3 rounded-lg">
                  All boards are stored locally in your browser (localStorage). No cloud storage
                  yet, but your data stays private and secure on your device.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-gray-900 hover:text-gray-700 transition-colors duration-200 flex items-center justify-between">
                  Can I use my own images?
                  <ChevronDown className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <p className="mt-3 text-gray-600 text-sm bg-gray-50 p-3 rounded-lg">
                  Coming soon! You'll be able to upload cutout PNG images and place them on the
                  canvas for more personalized designs.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-gray-900 hover:text-gray-700 transition-colors duration-200 flex items-center justify-between">
                  How do I share my designs?
                  <ChevronDown className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <p className="mt-3 text-gray-600 text-sm bg-gray-50 p-3 rounded-lg">
                  Export functionality is coming soon! You'll be able to save your canvas as a PNG
                  image to share with clients or friends.
                </p>
              </details>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Start Designing?</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Create your first room design and bring your vision to life
            </p>
            <Link
              href="/boards/new"
              className="inline-flex items-center px-8 py-4 bg-neutral-600 text-white font-semibold rounded-xl hover:bg-neutral-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Plus className="w-5 h-5 mr-2" />
              Start Designing Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
