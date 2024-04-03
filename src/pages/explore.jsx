import Sidebar from "../components/sidebar/sidebar";
import Trends from "../components/trends/trends";

function Explore () {
    return (
        <>
            <main className='left-sidebar'>
                <Sidebar />
            </main>
            <main className="timeline">
                <h1>Explore</h1>
            </main>
            <main className="right-sidebar">
                <Trends />
            </main>
        </>
    )
}
export default Explore;