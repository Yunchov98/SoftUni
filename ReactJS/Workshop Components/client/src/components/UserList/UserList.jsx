import { Search } from "../Search/Search";
import { UserListTable } from "./UserListTable/UserListTable";

export const UserList = () => {
    return (
        <section className="card users-container">
            <Search />
            <UserListTable />
        </section>
    );
}