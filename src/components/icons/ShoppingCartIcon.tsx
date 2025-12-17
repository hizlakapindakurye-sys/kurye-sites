const ShoppingCartIcon = ({ className }: { className?: string }) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={className || "h-10 w-10 text-blue-600"} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={1.5}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.328 1.09-.83l.842-4.21a.5.5 0 00-.46-.621H5.223L4.242 3.867M7.5 14.25L5.106 5.165m0 0a.5.5 0 01.465-.666h11.458a.5.5 0 01.465.666l-1.22 6.111M7.5 14.25L-1.55 6.183" />
        </svg>
    );
};

export default ShoppingCartIcon;
