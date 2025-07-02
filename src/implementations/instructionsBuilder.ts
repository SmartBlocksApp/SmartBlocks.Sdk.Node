import {
    IBranchInstruction,
    ICallbackInstruction,
    IExecuteInstruction,
    IInstructionsBuilder,
    Instruction,
    InstructionType,
    RawParameters,
} from "../models/builder";
import { Branch } from "./instructions/branch";
import { Callback } from "./instructions/callback";
import { Execute } from "./instructions/execute";

export class InstructionsBuilder implements IInstructionsBuilder {
    private _instructions: Instruction<unknown>[] = [];
    private _serviceIdentifier: string;

    public get service() {
        return this._serviceIdentifier;
    }

    constructor(serviceIdentifier: string) {
        this._serviceIdentifier = serviceIdentifier;
    }

    public add(instruction: Instruction<unknown>): this {
        this._instructions.push(instruction);

        return this;
    }

    public addRaw(raw: string): this {
        this._instructions.push({
            service: "",
            type: InstructionType.Raw,
            instruction: {
                code: raw,
            } as RawParameters,
            _processed: false,
        });

        return this;
    }

    public execute(name: string, args: any[] = [], service: string = this._serviceIdentifier ): IExecuteInstruction {
        return new Execute(service, name, args);
    }

    public branch(name: string, code: string): IBranchInstruction {
        return new Branch(name, code);
    }

    public callback(name: string, branchName?: string): ICallbackInstruction {
        return new Callback(name, branchName);
    }

    public dumpInstructions(): Instruction<unknown>[] {
        return this._instructions;
    }
}
