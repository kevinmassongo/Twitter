import Sidebar from "../components/sidebar/sidebar";
import Trends from "../components/trends/trends";

function Lists() {
    return (
        <>
            <main className='left-sidebar'>
                <Sidebar />
            </main>
            <main className="timeline">
                <h1>Lists</h1>
            </main>
            <main className="right-sidebar">
                <Trends />
            </main>
        </>
    )
}
export default Lists;