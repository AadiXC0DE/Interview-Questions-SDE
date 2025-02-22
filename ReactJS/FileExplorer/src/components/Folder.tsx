import { useState } from "react";

function Folder({ explorer, handleInsertNode }) {
    // State to manage folder expansion and input visibility
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: false
    });

    // Function to handle the creation of a new folder or file
    const handleNewFolder = (e) => {
        // Check if the Enter key is pressed and input is not empty
        if (e.key === "Enter" && e.target.value) {
            handleInsertNode(explorer.id, e.target.value, showInput.isFolder );
            setShowInput({...showInput, visible: false});
        }
    };

    // Function to show input for adding a new folder or file
    const handleAddFolder = (e, isFolder) => {
        e.stopPropagation(); // Prevent event bubbling
        setExpand(true); // Expand the folder
        setShowInput({
            visible: true,
            isFolder: isFolder // Set type of new item (folder or file)
        });
    }

    console.log( 'folder data', explorer); // Debugging output for folder data

    if(explorer.isFolder){
        return (
            <div style={{marginTop: "5px"}}>
                <div className = "folder" onClick={()=>setExpand(!expand)} style={{cursor: "pointer"}}>
                    <span>🗂️ {explorer.name}</span> 
                    <div>
                        {/* Buttons to add new folder or file */}
                        <button className = "btn" onClick={(e)=>handleAddFolder(e, true)} onKeyDown={(e)=>handleAddFolder(e, true)}>Folder +</button>
                        <button className = "btn" onClick={(e)=>handleAddFolder(e, false)} onKeyDown={(e)=>handleAddFolder(e, false)}>File +</button>
                    </div>
                </div>
                <div style={{display: expand ? "block" : "none", paddingLeft: "20px"}}>
                    { showInput.visible && (
                        <div className = "inputContainer">
                            <span>{showInput.isFolder ? "📁" : "📄"}</span>
                            <input
                                type="text"
                                className="inputContainerInput"
                                autoFocus
                                onBlur={() => { setShowInput({ visible: false, isFolder: false }) }}
                                onKeyDown={handleNewFolder}
                            ></input>
                        </div>
                    )}
                    {explorer.items.map((item)=>{
                        return(
                                <Folder explorer = {item} key={item.id} handleInsertNode = {handleInsertNode} />
                        )
                    })}
                </div>
            </div>
        )
    }
    else{
        return (
                <span className = "file">🗒️ {explorer.name}</span>
        )
    }
}

// This Folder component represents a folder or file in a file explorer UI.
// It uses state to manage whether the folder is expanded and whether the input for adding a new folder or file is visible.
// The handleNewFolder function is triggered when the user presses "Enter" to add a new item.
// The handleAddFolder function manages the visibility of the input field for adding new folders or files.
// The component recursively renders child folders, allowing for a nested folder structure.
// The visual representation includes icons for folders and files, enhancing user experience.
export default Folder;