import { useState } from 'react'
import explorer from './Data/FolderData'
import Folder from './components/Folder'

import './App.css'
import useTraverseTree from './hooks/use-traverse-tree';

function App() {

  const [explorerData, setExplorerData] = useState(explorer);
  console.log(explorerData);
  const {insertNode} = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    if (finalTree) {
        setExplorerData(finalTree);
    }
  }

  return (
    <>
    File explorer
    <Folder explorer={explorerData} handleInsertNode={handleInsertNode} />
    </>
  )
  
}

export default App
