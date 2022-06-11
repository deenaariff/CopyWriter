figma.showUI(__html__, { width: 239, height: 172 })

let updateUIFromSelection = () => {
    let currentSelection = figma.currentPage.selection[0]
    if (currentSelection) {
        figma.ui.postMessage(currentSelection.name)
    } else {
        alert("Make a text selection on the page")
        figma.ui.close()
    }
}

updateUIFromSelection()

figma.on("selectionchange", () => { 
    updateUIFromSelection()
})

figma.ui.onmessage = async (message) => {
    if (message.type == "Apply Suggestion") {
        for (const node of figma.currentPage.selection) {
            console.log(node)
            await figma.loadFontAsync(node.fontName)
            node.autoRename = true
            node.characters = message.data
            figma.ui.close()
        }
    }
}