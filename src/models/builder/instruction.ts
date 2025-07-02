import type { InstructionType } from ".";

export type Instruction<T> = {
   /** Service identifier as retrieved from IoC container */
   service: string;
   /** Type of instruction to execute */
   type: InstructionType;
   /** Instruction data itself */
   instruction: T;

   /** internal flag indicating if this instruction was already processed */
   _processed?: boolean;
};
