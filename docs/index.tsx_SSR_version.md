# Switch from CSR to SSR just by a few lines at the bottom

```tsx
import Axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { Post } from '../types';
import { GetServerSideProps } from 'next';

dayjs.extend(relativeTime);

type Data = {
  posts: Post[];
};

export default function Home({ posts }: Data) {
  return (
    <div className="pt-12">
      <Head>
        <title>Readit: the front page to the internet</title>
      </Head>

      <div className="container flex pt-4">
        {/* Post feed */}
        <div className="w-160">
          {posts.map((post) => (
            <div key={post.identifier} className="flex mb-4 bg-white rounded">
              {/* VoteSection */}
              <div className="w-10 text-center bg-gray-200 rounded-l">
                <p>V</p>
              </div>

              {/* Post Data section */}
              <div className="w-full p-2">
                <div className="flex items-center">
                  <Link href={`/r/${post.subName}`}>
                    <Fragment>
                      <img
                        src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                        className="w-6 h-6 mr-1 rounded-full cursor-pointer"
                      />
                      <a className="text-xs font-bold cursor-pointer hover:underline">
                        /r/{post.subName}
                      </a>
                    </Fragment>
                  </Link>
                  <p className="text-xs text-gray-600">
                    <span className="mx-1">•</span>Posted by
                    <Link href={`/u/${post.username}`}>
                      <a className="mx-1 hover:underline">/u/{post.username}</a>
                    </Link>
                    <Link href={post.url}>
                      <a className="mx-1 hover:underline">
                        {dayjs(post.createdAt).fromNow()}
                      </a>
                    </Link>
                  </p>
                </div>

                {/* Title & Body */}
                <Link href={post.url}>
                  <a className="my-1 text-lg font-medium">{post.title}</a>
                </Link>
                {post.body && <p className="my-1 text-sm">{post.body}</p>}

                {/* Action buttons */}
                <div className="flex">
                  <Link href={post.url}>
                    <a>
                      <div className="px-1 py-1 mr-1 text-xs text-gray-400 rounded cursor-pointer hover:bg-gray-200">
                        <i className="mr-1 fas fa-comment-alt fa-xs" />
                        <span className="font-bold">20 Comments</span>
                      </div>
                    </a>
                  </Link>
                  <div className="px-1 py-1 mr-1 text-xs text-gray-400 rounded cursor-pointer hover:bg-gray-200">
                    <i className="mr-1 fas fa-share fa-xs" />
                    <span className="font-bold">Share</span>
                  </div>
                  <div className="px-1 py-1 mr-1 text-xs text-gray-400 rounded cursor-pointer hover:bg-gray-200">
                    <i className="mr-1 fas fa-bookmark fa-xs" />
                    <span className="font-bold">Save</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const res = await Axios.get('/posts');

    return { props: { posts: res.data } };
  } catch (err) {
    return { props: { error: 'Something went wrong' } };
  }
};
```
