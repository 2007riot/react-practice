import Tabs from "./tabs";
import './tabs.css'

function Tab1 () {
    return (
        <h1>Content for tab 1</h1>
    )
}

function Tab2 () {
    return (
        <h2>Some random content for tab 2</h2>
    )
}

function Tab3 () {
    return (
        <h3>More random content for tab 3</h3>
    )
}


export default function TabTest() {
    
    const tabs = [
        {
            label: "Tab 1",
            content: <Tab1 />
        },
        {
            label: "Tab 2",
            content: <Tab2 />
        },
        {
            label: "Tab 3",
            content: <Tab3 />
        }
    ] 

    function handleChange(currentTabIndex) {
        console.log(currentTabIndex);
    }

    return <Tabs tabsContent={tabs} onChange={handleChange}/>
}