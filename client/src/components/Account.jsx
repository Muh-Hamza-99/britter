import useMyPosts from "./hooks/useMyPosts";

import Post from "./Post";

import StyledFeed, { LoadMoreButton } from "./styled/Feed.styled";

const Account = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useMyPosts();
  return (
    <StyledFeed>
      <h1>My Posts</h1>
      {data?.pages?.map(page => page.posts.map(post => <Post post={post} />))}
      <LoadMoreButton>
        {hasNextPage && !isFetchingNextPage && <button onClick={() => fetchNextPage()}>Load More</button>}
      </LoadMoreButton>
    </StyledFeed>
  );
};

export default Account;