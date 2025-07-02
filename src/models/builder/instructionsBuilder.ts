import { Instruction, IBranchInstruction, IExecuteInstruction, ICallbackInstruction } from ".";

export interface IInstructionsBuilder {
    add(instruction: Instruction<unknown>): IInstructionsBuilder;
    addRaw(raw: string): IInstructionsBuilder;
    execute(name: string, args: any[], service?: string): IExecuteInstruction;
    branch(name: string, code: string): IBranchInstruction;
    callback(name: string, branchName?: string): ICallbackInstruction;
}
