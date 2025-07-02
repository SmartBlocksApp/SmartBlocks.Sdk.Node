import type { Block } from ".";

export type BlockBranch = {
   /** Name of the branch */
   name: string;
   // /** List of settings of the branch */
   settings?: any;
   /** List of blocks in the branch */
   blocks: Block[];
};
