import {  blankSmartBlock, Block, IInstructionsBuilder, InstructionsBuilder } from "../../index";

export class CodeGenerator {

    protected _block: Block;
    protected _builder: IInstructionsBuilder;

    public get builder(): IInstructionsBuilder {
        return (this._builder);
    }

    public get block(): Block {
        return (this._block);
    }

    constructor(block?: Block) {
        this._block = block ?? blankSmartBlock;
        this._builder = new InstructionsBuilder("");
    }


}