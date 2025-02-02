const explorer = {
    id: 1,
    name: "root",
    isFolder: true,
    items: [
        {
            id: 2,
            name: "public",
            isFolder: true,
            items: [
                {
                    id: 3,
                    name: "public nested 1",
                    isFolder: true,
                    items: [
                        {
                            id: 4,
                            name: "public nested 1.1",
                            isFolder: true,
                            items: []
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            name: "src",
            isFolder: true,
            items: []
        },
        {
            id: 4,
            name: "package.json",
            isFolder: false,
            items: []
        },
        {
            id: 5,
            name: "index.html",
            isFolder: false,
            items: []
        },
        {
            id: 6,
            name: "App.tsx",
            isFolder: false,
            items: []
        }
    ]
}

export default explorer;