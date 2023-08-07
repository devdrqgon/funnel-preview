/// <reference types="vite/client" />

type BlockTypes= 'text' | 'image' | 'list' | 'button'


interface Page {
    id: string
    blocks: Array<BlockText |BlockImg | BlockList |BlockButton>
}

type BlockBase= {
    id: string
    type: BlockTypes
}

interface BlockText extends BlockBase{
    text: string,
    color: string
    align: 'center'
}


interface BlockImg extends BlockBase{
    src: string,
}



interface BlockList extends BlockBase{
    items: BlockListItemData[],
}

interface BlockListItemData {
    title: string,
    description: string,
    src: string,
}

interface BlockButton extends BlockBase{
 text:string,
 color: string,
 bgColor: "#0076FF"
}
