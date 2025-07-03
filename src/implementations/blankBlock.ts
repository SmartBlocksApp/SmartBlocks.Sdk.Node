import { Block } from "../models/smartBlock";

export const blankSmartBlock: Block = {
    caption: "",
    id: "",
    isCollapsed: false,
    inputs: [],
    type: {
        name: "",
        package: "",
        version: ""
    },
}