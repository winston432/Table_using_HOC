// src/hocs/handleError.jsx
export default function handleError(Component) {
    return function handleError({ error, ...props }) {
        if (error) {
            return <div>Error: {error.message}</div>;
        }
        return <Component {...props} />;
    };
}