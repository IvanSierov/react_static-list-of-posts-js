import { Fragment } from 'react';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <Fragment key={comment.id}>
        <CommentInfo comment={comment} />
      </Fragment>
    ))}
  </div>
);
