import { Fragment } from 'react';
import './PostList.scss';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <Fragment key={post.id}>
        <PostInfo post={post} />
      </Fragment>
    ))}
  </div>
);
