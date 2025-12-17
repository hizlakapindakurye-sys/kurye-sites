const MailOpenIcon = ({ className }: { className?: string }) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={className || "h-10 w-10 text-blue-600"} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={1.5}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9V18a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 18V9m19.5 0a2.25 2.25 0 00-2.25-2.25H4.5A2.25 2.25 0 002.25 9m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 11.16a2.25 2.25 0 01-1.07-1.916V9" />
        </svg>
    );
};

export default MailOpenIcon;
