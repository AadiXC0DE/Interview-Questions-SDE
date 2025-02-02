import { useState } from "react";

function Folder({ explorer, handleInsertNode }) {
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: false
    });

    const handleNewFolder = (e) => {
        if (e.key === "Enter" && e.target.value) {
            handleInsertNode(explorer.id, e.target.value, showInput.isFolder );
            setShowInput({...showInput, visible: false});
        }
    };

    const handleAddFolder = (e, isFolder) => {
        e.stopPropagation();
        setExpand(true);
        setShowInput({
            visible: true,
            isFolder: isFolder
        });
    }

    console.log( 'folder data', explorer);

    if(explorer.isFolder){
        return (
            <div style={{marginTop: "5px"}}>
    
                <div className = "folder" onClick={()=>setExpand(!expand)} style={{cursor: "pointer"}}>
                    <span>🗂️ {explorer.name}</span> 
                    <div>
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

export default Folder;