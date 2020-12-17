
export type CpfGeneratorOptions = {
  format?: boolean;
  prefix?: string;
};

export const cpfGen: (options?: CpfGeneratorOptions) => string;
export default cpfGen;
