import type { Instruction } from "..";

export type CallbackParameters = {
   /** Name of the callback */
   name: string;

   /** Name of the branch where the instructions are */
   branchName: string;

   subInstructions?: Instruction<unknown>[];
};
