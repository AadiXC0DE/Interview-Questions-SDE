import { useCallback } from 'react';

const useTraverseTree = () => {
    const insertNode = useCallback((data, folderId, item, isFolder) => {
        // Check if the current node is the target folder
        if (data.id === folderId) {
            const newNode = {
                id: Date.now(), // Use Date.now() for a unique ID
                name: item,
                isFolder: isFolder,
                items: []
            };
            data.items.unshift(newNode); // Add the new node to the beginning of the items array
            return { ...data }; // Return the updated tree structure
        }

        // Recursively check child nodes if the current node is not the target folder
        for (let child of data.items) {
            const result = insertNode(child, folderId, item, isFolder);
            if (result) {
                return { ...data, items: [...data.items] }; // Return the updated tree structure
            }
        }

        return null; // Return null if the folderId was not found
    }, []);

    return { insertNode };
};

export default useTraverseTree;