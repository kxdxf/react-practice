
export const ColoredMessage = (props) => {
    const contentStyle = {
        color: props.color,
        fontSize: "20px",
    };

    console.log(props);

    return <p style={contentStyle}>{props.message}</p>;
};