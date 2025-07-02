export type BlockSource = {
   /** Package library where this block is declared */
   package: string;
   /** Version of the package library to use */
   version: string;
   /** Name of block type in the package library */
   name: string;
};
