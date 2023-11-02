export default function TodoItem({
    _id,
    text,
    isCompleted,
    changeStatusHandler,
}) {
    const onChangeStatusClick = () => {
        changeStatusHandler(_id);
    }

    return (
        <tr className={`todo${isCompleted ? ' is-completed' : ''}`}>
            <td>{text}</td>
            <td>{isCompleted}</td>
            <td>{isCompleted ? 'Completed' : 'Active'}</td>
            <td className="todo-action">
                <button onClick={onChangeStatusClick} className="btn todo-btn">Change status</button>
            </td>
        </tr>
    );
}
