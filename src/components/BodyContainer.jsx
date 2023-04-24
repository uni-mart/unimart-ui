const BodyContainer = (props) => {
    const { className: propsClass, children } = props;
    return (
        <div className={`min-vh-full overflow-hidden ${propsClass ? propsClass : ''}`}>
            {children}
        </div>
    )
}

export default BodyContainer;