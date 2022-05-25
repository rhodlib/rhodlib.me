import BlogCard from '../components/BlogCard';
import { posts } from '../content/posts';

const Blog = ({ ...props }) => {
    return <div {...props}>{
        posts.map((post) => <BlogCard key={post.slug} {...post} />)
    }</div>
}

export default Blog;