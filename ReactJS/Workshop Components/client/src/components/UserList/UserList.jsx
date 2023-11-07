import { Search } from '../Search/Search';
import { UserListTable } from './UserListTable/UserListTable';

export const UserList = () => {
    return (
        <section className="card users-container">
            <Search />

            <UserListTable />

            <button className="btn-add btn">Add new user</button>
        </section>
    );
};
