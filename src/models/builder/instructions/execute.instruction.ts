import type { Instruction } from "..";
import { ExecuteParameters } from "../parameters";

export type IExecuteInstruction = {
   service(name: string): IExecuteInstruction;
   name(name: string): IExecuteInstruction;
   addArgument(arg: any): IExecuteInstruction;
   setArguments(args: any[]): IExecuteInstruction;
   asSubscribe(): IExecuteInstruction;
   build(): Instruction<ExecuteParameters>;
}
