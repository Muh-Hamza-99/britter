import { useInfiniteQuery } from "react-query";

const useFeed = () => {
    return useInfiniteQuery("feed", async ({ pageParam = 0 }) => {
        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/feed?cursor=${pageParam}`, { credentials: true });
        if (!res.ok) throw new Error("Something went wrong on the server side.");
        return res.json();
    }, {
        getNextPageParam: (lastPage) => lastPage.posts.length >= 5 ? lastPage.cursor : undefined
    });
};

export default useFeed;