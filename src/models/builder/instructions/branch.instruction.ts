import type { Instruction } from "..";
import { BranchParameters } from "../parameters";

export interface IBranchInstruction {
   service(name: string): IBranchInstruction;
   branchName(name: string): IBranchInstruction;
   build(): Instruction<BranchParameters>;
}
