// Dependencies
import styled from 'styled-components';
import { useEffect } from 'react';
import ContentfulApi from '../../api/ContentfulApi';
import Head from 'next/head';

// Components
import BlogPageContent from '../../components/blog_post/BlogPageContent';
import Section from '../../components/comps/section';
import Socials from '../../components/comps/socials';
import media from '../../components/MediaQueries';
import BlogBackground from '../../components/comps/blogBackground';

const SocialsWrapper = styled.div`
    width: 100%;
    height: 100%;

    position: relative;

    ${media.width_600`
        display: none;
    `}
`

export const getStaticProps = async () => {

    const res = await ContentfulApi.getPagePosts(0);
    const total = await ContentfulApi.getTotalPostsNumber();

    return {
        props: {
            posts: res.posts || null,
            totalPages: Math.floor(total/4 + 1)
        }
    }
}

const Blog = ({ handleChildLoaded, posts, totalPages, isChildLoaded }) => {

    // Used to detect page load completion. Used in automatic closing of navigation for page transition.
    useEffect(() => {
        handleChildLoaded()
    }, [])

    return (
        <>
            <Head>
                <title key="blog-index">Manny Houston | Thoughts</title>
            </Head>
            <Section padding="none" area="1by3">
                <BlogBackground />
                <SocialsWrapper>
                    <Socials
                        color="white"
                        gap="1rem"
                        direction="vertical"
                        media_query="notmain"
                        layoutId="socials"
                        backing={true}
                    />
                </SocialsWrapper>
                <BlogPageContent posts={posts} pageNum={0} totalPages={totalPages} isChildLoaded={isChildLoaded} />
            </Section>
        </>
    );
}

export default Blog;

