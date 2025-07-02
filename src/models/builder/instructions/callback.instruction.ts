import type { Instruction } from "..";
import { CallbackParameters } from "../parameters";

export interface ICallbackInstruction {
   service(name: string): ICallbackInstruction;
   name(name: string): ICallbackInstruction;
   branchName(name: string): ICallbackInstruction;
   build(): Instruction<CallbackParameters>;
}
