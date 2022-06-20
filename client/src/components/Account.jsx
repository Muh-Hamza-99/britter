import useMyPosts from "./hooks/useMyPosts";

import StyledFeed from "./styled/Feed.styled";

const Account = () => {
  const { data } = useMyPosts();
  return (
    <StyledFeed>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </StyledFeed>
  );
};

export default Account;