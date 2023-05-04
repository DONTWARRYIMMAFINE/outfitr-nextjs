const { loadEnvConfig } = require("@next/env");
loadEnvConfig(process.cwd());

import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: `${process.env.API_URL}/graphql`,
  documents: ["src/lib/graphql/**/*.{gql,graphql}"],
  ignoreNoDocuments: true,
  generates: {
    "src/lib/graphql/schema.generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};

export default config;
