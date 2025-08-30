'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { listBoards } from '@/lib/storage';
import type { BoardIndexItem } from '@/types';

export default function Page() {
  const [boards, setBoards] = useState<BoardIndexItem[]>([]);
  useEffect(() => setBoards(listBoards()), []);

  return (
    <main className="min-h-[calc(100vh-4rem)] p-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Room Boards</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access and manage all your saved room designs and layouts
          </p>
        </div>

        {/* Boards Grid */}
        {boards.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {boards.map((board) => (
              <div
                key={board.id}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="space-y-4">
                  {/* Board Preview */}
                  <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                    <svg
                      className="w-12 h-12 text-gray-600 group-hover:text-blue-600 transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>

                  {/* Board Info */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                      {board.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Last updated:{' '}
                      {new Date(board.updatedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>

                  {/* Action Button */}
                  <Link
                    href={`/boards/${board.id}`}
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 hover:scale-105 font-medium shadow-md hover:shadow-lg"
                  >
                    Open Board
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg
                className="w-12 h-12 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">No boards yet</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Create your first room design to get started. Design beautiful layouts and save them
              for later.
            </p>
            <Link
              href="/boards/new"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Create Your First Board
            </Link>
          </div>
        )}

        {/* Create New Board Button */}
        {boards.length > 0 && (
          <div className="text-center">
            <Link
              href="/boards/new"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Create New Board
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
