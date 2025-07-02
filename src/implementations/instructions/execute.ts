import {
    IExecuteInstruction,
    type ExecuteParameters,
    Instruction,
    InstructionType,
} from "../../models/builder";

export class Execute implements IExecuteInstruction {
    private _instruction: Instruction<ExecuteParameters>;

    constructor(service: string, name: string, args: any[]) {
        this._instruction = {
            service: service,
            type: InstructionType.Execute,
            instruction: {
                name: name,
                arguments: args ?? [],
            },
            _processed: false,
        };
    }

    public service(name: string): this {
        this._instruction.service = name;

        return this;
    }

    public name(name: string): this {
        this._instruction.instruction.name = name;

        return this;
    }

    public addArgument(arg: any): this {
        this._instruction.instruction.arguments ??= [];
        this._instruction.instruction.arguments.push(arg);

        return this;
    }

    public setArguments(args: any[]): this {
        this._instruction.instruction.arguments = args;

        return this;
    }

    public build(): Instruction<ExecuteParameters> {
        return this._instruction;
    }
}
