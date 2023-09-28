/* eslint-disable camelcase */
import useIssues from '../../../service/useIssues'
import Post from './card-post'

export default function ListIssus() {
  const { responseIssues } = useIssues()

  return responseIssues?.map(({ id, title, body, number, created_at }) => (
    <Post
      key={id}
      title={title}
      description={body}
      number={number}
      created_at={created_at}
    />
  ))
}
