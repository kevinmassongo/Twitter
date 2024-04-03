const Paragraph = ({style, children}) => {
    return (
        <>
            <p className={style}>{children}</p>
        </>
        )
}

export default Paragraph;
