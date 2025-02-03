import { useCallback } from 'react';

const useTraverseTree = () => {
    const insertNode = useCallback((data, folderId, item, isFolder) => {
        // Check if the current node (folder) is the target folder where we want to add a new item
        if (data.id === folderId) {
            // Create a new node (folder or file) with a unique ID, name, and type (isFolder)
            const newNode = {
                id: Date.now(), // Use Date.now() to generate a unique ID
                name: item, // The name of the new folder or file
                isFolder: isFolder, // Boolean indicating if it's a folder
                items: [] // Initialize with an empty array for child items
            };
            // Add the new node to the beginning of the items array of the target folder
            data.items.unshift(newNode); 
            return { ...data }; // Return the updated folder structure
        }

        // If the current node is not the target folder, we need to check its children
        for (let child of data.items) {
            // Recursively call insertNode on each child to find the correct folder
            const result = insertNode(child, folderId, item, isFolder);
            if (result) {
                // If we found the target folder in the children, return the updated structure
                return { ...data, items: [...data.items] }; // Spread the existing items to maintain the structure
            }
        }

        // If we reach here, it means the folderId was not found in this branch
        return null; // Return null to indicate that no insertion occurred
    }, []);

    return { insertNode }; // Return the insertNode function for use in other components
};

export default useTraverseTree;