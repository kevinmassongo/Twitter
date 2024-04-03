import Sidebar from "../components/sidebar/sidebar";
import Trends from "../components/trends/trends";

function More (){
    return (
        <>
            <main className='left-sidebar'>
                <Sidebar />
            </main>
            <main className="timeline">
                <h1>More</h1>
            </main>
            <main className="right-sidebar">
                <Trends />
            </main>
        </>
    )
}
export default More;