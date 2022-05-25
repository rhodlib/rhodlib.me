import { FC } from "react"
import { Link } from "react-router-dom"

type BlogCardProperties = {
    readonly icon: string,
    readonly title: string,
    readonly date: string,
    readonly description: string,
    readonly slug: string
}

const BlogCard: FC<BlogCardProperties> = ({ icon, title, date, description, slug }) => {
    return <Link to={`/blog/${slug}`} className="text-primary flex hover:border-solid border-2 border-primary border-none rounded-lg py-2 px-3 cursor-pointer">
        <img src={icon} alt={title} className="w-16 md:w-24" />
        <div className="flex flex-col justify-center ml-3">
            <h2 className="text-xl md:text-3xl">{title}</h2>
            <p className="text-sm md:text-xl">{description}</p>
            <span className="text-sm md:text-lg">{date}</span>
        </div>
    </Link>
}

export default BlogCard