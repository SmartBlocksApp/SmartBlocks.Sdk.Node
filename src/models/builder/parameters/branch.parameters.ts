import type { Instruction } from "..";

export type BranchParameters = {
   /** Name of the branch */
   branchName: string;

   /** Code to add before the branch instructions */
   code: string;

   subInstructions?: Instruction<unknown>[];
};
