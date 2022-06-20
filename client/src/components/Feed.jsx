import useFeed from "./hooks/useFeed";

import StyledFeed from "./styled/Feed.styled";

const Feed = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useFeed();
  return (
    <StyledFeed>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {hasNextPage && !isFetchingNextPage && <button onClick={() => fetchNextPage()}>Load More</button>}
    </StyledFeed>
  );
};

export default Feed;