const BlogIcon = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M17 9H7V7h10v2ZM7 13h10v-2H7v2Z" {...props} />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 18V2h20v16h-6v4h-2a4 4 0 0 1-4-4H2Zm10-2v2a2 2 0 0 0 2 2v-4h6V4H4v12h8Z"
            {...props}
        />
    </svg>
)

export default BlogIcon
