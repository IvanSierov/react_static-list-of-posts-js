import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
// Спойлер: сюда нужно будет импортировать UserInfo и CommentList

export const PostInfo = ({ post }) => {
  // Вытаскиваем нужные свойства из объекта post для удобства
  const { title, body, user, comments } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        {' Posted by  '}
        <UserInfo user={user} />
      </div>

      <p className="PostInfo__body">{body}</p>

      <hr />

      {comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
