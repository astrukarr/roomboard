// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-50 border-t border-gray-200">
      <div className="mx-auto px-6 py-8 space-y-6">
        <div className="flex  items-center justify-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-8 text-sm">
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:underline"
            >
              About us
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:underline"
            >
              Contact
            </Link>
            <Link
              href="/faq"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:underline"
            >
              FAQ
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="flex text-xs text-gray-500 justify-center">
          Copyright © {new Date().getFullYear()} RoomBoard.
        </div>
      </div>
    </footer>
  );
}
