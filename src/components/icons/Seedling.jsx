const Seedling = ({ size = 24, color = "currentColor", ...props }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M12 22v-7.5" />
        <path d="M9 9.5a3 3 0 0 1 6 0v5" />
        <path d="M3 13a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3" />
        <path d="M18 11.5a3.5 3.5 0 0 0-3.5-3.5H13" />
      </svg>
    )
  }
  
  export default Seedling
  
  