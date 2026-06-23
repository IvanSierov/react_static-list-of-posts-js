import './CommentList.scss';
import { CommentInfo } from '../CommentInfo'; // Импортируем компонент отдельного комментария

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
